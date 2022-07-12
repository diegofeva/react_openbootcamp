import React from 'react';
import {useFormik, Formik, Form, ErrorMessage, Field} from 'formik';
import {LEVELS} from '../../../models//levels.enum';
import { FilePresent } from '@mui/icons-material';
import {Task} from '..//..//..//models//task.class';

const TaskFormFormik = ({add}) => {

    const initialCredentials = {
        taskname: "",
        taskdescription: "",
        selectlevel: LEVELS.NORMAL
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

    return (
        <Formik
            initialValues={initialCredentials}
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
                            <Field id='taskdescription' type='text' name='taskdescription' placeHolder='Type the task description'/>
                            <Field as='select' id='selectlevel'>
                                <option value={LEVELS.NORMAL}>NORMAL</option>
                                <option value={LEVELS.URGENTE}>URGENT</option>
                                <option value={LEVELS.BLOCKING}>BLOCKING</option>
                            </Field>    
                            <button type='submit'>
                                Add new task
                            </button>
                    </Form>  
            
            )}            

        </Formik>
    )
}

export default TaskFormFormik;