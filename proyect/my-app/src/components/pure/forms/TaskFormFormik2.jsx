import React from 'react';
import {useFormik} from 'formik';
import {LEVELS} from '..//..//..//models//levels.enum'
import {Task} from '..//..//..//models//task.class'
import * as Yup from 'yup';


const TaskFormFormik2 = ({add}) => {

const createTask = (values) => {
    const task = new Task(
        values.taskname,
        values.taskdescription,
        false,
        values.selectlevel
        );

        add(task);
    }    

const formik = useFormik({
    initialValues: {
        taskname: "",
        taskdescription: "",
        selectlevel: ""
    },
    validationSchema: Yup.object({
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
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      createTask(values);

    },
  });

  
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="taskname">Task name</label>
      <input
        id="taskname"
        name="taskname"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.taskname}
        onBlur={formik.handleBlur}
      />
      { formik.errors.taskname && formik.touched.taskname? 
      (<div>{formik.errors.taskname}</div>) : null}

       <label htmlFor="taskdescription">Task description</label>
       <input
         id="taskdescription"
         name="taskdescription"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.taskdescription}
         onBlur={formik.handleBlur}
       />

      { formik.errors.taskdescription && formik.touched.taskdescription ? 
      (<div>{formik.errors.taskdescription}</div>) : null}
 
      
       <select id="selectlevel" name="selectlevel" onChange={formik.handleChange} value={formik.values.selectlevel} onBlur={formik.handleBlur}>
            <option>-----</option>
            <option value={LEVELS.NORMAL}>NORMAL</option>
            <option value={LEVELS.URGENTE}>URGENT</option>
            <option value={LEVELS.BLOCKING}>BLOCKING</option>
       </select>

       { formik.errors.selectlevel && formik.touched.selectlevel ?  
      (<div>{formik.errors.selectlevel}</div>) : null}
 
       <button type="submit">Submit</button>
     </form>
   );
 };  

 export default TaskFormFormik2;