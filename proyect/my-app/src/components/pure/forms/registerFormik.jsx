import React from 'react';
import {User} from '../../../models/user.class'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup';
import {ROLES} from '../../../models/rolesenum'


function RegisterFormik() {
    
    let user = new User();

    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirm: "",
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6,'Username to short')
                .max(12, "Username to long")
                .required('Username is required'),
            email: Yup.string()
                .email('invalid email')
                .required('email is required'),
            rol: Yup.string()
                .oneOf([ROLES.USER,ROLES.ADMIN],'You must select a user role')
                .required('user role is required'),    
            password: Yup.string()
                .min(6,'password to short')
                .required('password is required'),
            confirm: Yup.string()
                .when('password', {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref('password')],
                        'Passwords must match!'
                    )
                }).required('You must confirm the password')        
    
        })


    

    const submit = (values) => {
        alert('register user');
    }

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues = {initialValues}
                validationSchema = {registerSchema}
                onSubmit = {async (values) => { 
                    await new Promise((r) => setTimeout(r, 1500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >

                {({ values,
                    errors,
                    touched,
                    isSubmitting,
                    handleChande,
                    handleBlur}) => (
                        
                         <Form>
                            <label htmlFor='username'>Username</label>
                            <Field id='username' type='text' name='username' placeholder='userExample'></Field>
                            {errors.username && touched.username && <ErrorMessage name='username' component='div'/>}
                            
                            <label htmlFor='email'>Email</label>
                            <Field id='email' type='email' name='email' placeholder='email@example.com'></Field>    
                            {errors.email && touched.email && <ErrorMessage name='email' component='div'/>}
                            
                            <label htmlFor='password'>Password</label>
                            <Field id='password' type='password' name='password' placeholder='password'></Field>
                            {errors.password && touched.password && <ErrorMessage name='password' component='div'/>} 
                            
                            <label htmlFor='confirm'>Confirm password</label>
                            <Field id='confirm' type='password' name='confirm' placeholder='confirm-password'></Field>
                            {errors.confirm && touched.confirm && <ErrorMessage name='confirm' component='div'/>} 

                            <button type="submit">register user account</button>
                            {isSubmitting ? (<p>Sending your credentials...</p>) : null}
                         </Form>   
                        )
                }

            </Formik>
        </div>
    );
};

export default RegisterFormik