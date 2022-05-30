import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task('example', 'Default description', false, LEVELS.NORMAL);

    return (
        <div>
            <div>
                Your tasks: 
            </div>

            {/*aplicar un fro para renerizar una lista de tareas*/}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};

TaskListComponent.propTypes = {

};

export default TaskListComponent;

