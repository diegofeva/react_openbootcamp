import React from 'react';
import {useFormik, Formik, Form, ErrorMessage, Field} from 'formik';
import {LEVELS} from '../../../models//levels.enum';
import { FilePresent } from '@mui/icons-material';
import {Task} from '..//..//..//models//task.class';
import * as Yup from 'yup';

const TaskFormFormik = ({add}) => {

    const initialCredentials = {
        taskname: "",
        taskdescription: "",
        selectlevel: ""
    }

    const createTask = (values) => {
        const task = new Task(
            values.taskname,
            values.taskdescription,
            false,
            values.selectlevel
        );

        add(task);
    }

    const registerSchema = Yup.object().shape(
        {
            taskname: Yup.string()
        .max(10, 'Must be 10 characters or less')
        .required('Required'),
      taskdescription: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .min(9, 'Task description should be 9 characters or more')
        .required('Required'),
      selectlevel: Yup.string()
      .oneOf([LEVELS.BLOCKING,LEVELS.NORMAL,LEVELS.URGENTE],'You must select a task level')  
      .required('You must select a task level')
        }
    ) 

    return (
        <Formik
            initialValues={initialCredentials}
            validationSchema={registerSchema}
            onSubmit={async (values) => { 
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    createTask(values);
                    
                }}
        >
           {({ values,
                    errors,
                    touched,
                    isSubmitting,
                    handleChande,
                    handleBlur}) => (
                    <Form>
                        
                            <Field id='taskname' type='text' name='taskname' placeHolder='Type a task name'/>
                            {errors.taskname && touched.taskname && <ErrorMessage name='taskname' component='div'/>}
                            <Field id='taskdescription' type='text' name='taskdescription' placeHolder='Type the task description'/>
                            {errors.taskdescription && touched.taskdescription && <ErrorMessage name='taskdescription' component='div'/>}
                            <Field as='select' id='selectlevel'>
                                <option value={LEVELS.NORMAL}>NORMAL</option>
                                <option value={LEVELS.URGENTE}>URGENT</option>
                                <option value={LEVELS.BLOCKING}>BLOCKING</option>
                            </Field> 
                            {errors.selectlevel && touched.selectlevel && <ErrorMessage name='selectlevel' component='div'/>}
                              
                            <button type='submit'>
                                Add new task
                            </button>
                    </Form>  
            
            )}            

        </Formik>
    )
}

export default TaskFormFormik;