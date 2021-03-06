import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';
import '../../styles/task.scss'
import TaskForm from '../pure/forms/taskForm';
import TaskFormFormik from '../pure/forms/TaskFormFormik';
import TaskFormFormik2 from '../pure/forms/TaskFormFormik2';

const TaskListComponent = () => {

    // Estado del componente
    const defaultTask1 = new Task('example1', 'Default description1', true, LEVELS.NORMAL);  
    const defaultTask2= new Task('example2', 'Default description2', false, LEVELS.URGENTE);
    const defaultTask3 = new Task('example3', 'Default description3', true, LEVELS.BLOCKING);


    const [tasks,setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading,setLoading] = useState(true);

    //control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task state has been modified')
        setTimeout( () => {
            setLoading(false);
        }, 2000)
        return () => {
            console.log('Task List component is going to unmount')
        };
    }, [tasks]);


    function completeTask(task) {
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        // We update the state of the component with the list of tasks and it will
        //update the iteration if the tasks in order to show the tasks updated
        tempTasks[index].completed = !tempTasks[index].completed;
        setTasks(tempTasks); 
    }

    function deleteTask(task){
        console.log('Delete this task:', task)
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks);
    }

    function addTask(task){
        console.log("Adding task", task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }
    
    // const changeCompleted = (id) => {
    //     console.log('TODO Cambiar el estado de una tarea')
    // };

    const Table = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th scope='col3'>Title</th>
                        <th scope='col3'>Description</th>
                        <th scope='col3'>Priority</th>
                        <th scope='col3'>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task,index) => {
                        return(
                            <TaskComponent
                            key={index}
                            task={task}
                            complete={completeTask}
                            supr={deleteTask}>
                            </TaskComponent>
                        )
                    })}
                </tbody>
            </table>
        )
    }

    let taskTable; 
    if (tasks.length > 0) {
        taskTable = <Table/>;
    } else {
        taskTable = (
            <div>
                <h3>There are no tasks to show</h3>
                <h4>Please create a new one</h4>
            </div>
        )
    }

    const loadingStyle = {
        color: 'grey',
        fontSize: '30px',
        fontWeight: 'bold',
    }



    return (
        <div>
            <div className='col-12'>
                <div className="card">
                    {/* Card Header (title) */}
                    <div className="card-header p-3">
                        <h5>Your tasks:</h5>
                    </div>
                    {/* Card Body (content) */}
                    <div className="card-body"  data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'}}>
                        {/* Add loading spinner from material UI */}
                        {loading? <p style={loadingStyle}>Loading...</p> : taskTable}
                    </div>
                </div>
            </div>  
            {/* <TaskForm add={addTask} length={tasks.length}></TaskForm>  */}
            <TaskFormFormik2 add={addTask} ></TaskFormFormik2>
        </div>
    );
};

TaskListComponent.propTypes = {

};

export default TaskListComponent;

