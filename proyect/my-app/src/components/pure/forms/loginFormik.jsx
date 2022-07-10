import React from 'react';
import {useNavigate}from  'react-router-dom';
import {Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape (
    {
        email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
        password: Yup.string()
                .required('Password is required')        
    }
);

const LoginFormik =  () => {

    const initialCredentials = {
        email: "",
        password: ""
    }

    const navigate= useNavigate();

    return (
        <div>
            <h4>Login form</h4>
            <Formik
                // Initial values that the form will take
                initialValues = { initialCredentials }
                // Yup validation schema
                validationSchema = {loginSchema}
                // onSubmit event
                onSubmit = {async (values) => { 
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    //we save the data to local storage
                    await localStorage.setItem('credentials', values);
                    navigate('/profile')
                }}
            >

                    {/* We obtain props from Formik */}
                    {/* {   props => {
                        const {
                            values,
                            touched,
                            errors,
                            isSubmitting,
                            handleChange,
                            handleBlur,

                        } = props; */}
                    {({ errors,
                        touched,
                        values,
                        isSubmitting,
                        handleChande,
                        handleBlur}) => {

                        return ( 
                            <Form>
                                <label htmlFor="email">First Name</label>
                                <Field id="email" type="email" name="email" placeholder="example@youremail.com" />

                                {/* Errors email */}
                                {
                                    errors.email && touched.email && 
                                    
                                    (
                        
                                            <ErrorMessage name="email" component='div'/>
                        
                                    )

                                }

                                <label htmlFor="password">Password</label>
                                <Field
                                id="password"
                                name="password"
                                placeholder="your password"
                                type="password"
                                />

                                {/* Errors pasdsword */}
                                {
                                    errors.password && touched.password && 
                                    (
                                        <div className='error'>
                                            <p>{errors.password}</p>
                                        </div>               
                                    )
                                }
                                <button type="submit">Submit</button>
                                {isSubmitting ? (<p>Login your credentials...</p>) : null}
                            </Form>


                        )

                    }}

            

            </Formik>
        </div>
    );
};

LoginFormik.propTypes =  {

}

export default LoginFormik;
