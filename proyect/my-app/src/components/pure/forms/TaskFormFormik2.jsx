import React from 'react';
import {useFormik} from 'formik';
import {LEVELS} from '..//..//..//models//levels.enum'
import {Task} from '..//..//..//models//task.class'


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
        selectlevel: LEVELS.NORMAL
    },
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
      />

       <label htmlFor="taskdescription">Task description</label>
       <input
         id="taskdescription"
         name="taskdescription"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.taskdescription}
       />
 
      
       <select id="selectlevel" name="selectlevel" onChange={formik.handleChange} value={formik.values.selectlevel}>
            <option value={LEVELS.NORMAL}>NORMAL</option>
            <option value={LEVELS.URGENTE}>URGENT</option>
            <option value={LEVELS.BLOCKING}>BLOCKING</option>
       </select>
 
       <button type="submit">Submit</button>
     </form>
   );
 };  

 export default TaskFormFormik2;