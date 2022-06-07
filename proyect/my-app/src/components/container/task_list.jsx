import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    // Estado del componente
    const defaultTask = new Task('example', 'Default description', false, LEVELS.NORMAL);

    const [tasks,setTasks] = useState(defaultTask);

    //control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task state has been modified')
        return () => {
            console.log('Task List component is going to unmount')
        };
    }, [tasks]);



    const changeCompleted = (id) => {
        console.log('TODO Cambiar el estado de una tarea')
    };

    return (
        <div>
            <div>
                Your tasks: 
            </div>

            {/*aplicar un for para renerizar una lista de tareas*/}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};

TaskListComponent.propTypes = {

};

export default TaskListComponent;

