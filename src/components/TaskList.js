import React from "react";
import Task from './Task';
import PropTypes from 'prop-types';



const TaskList = ({ tasks, changeStatusTask, deleteTask, startEditTask, finishEditTask }) => {


  return (
    <ul className="todo-list">
      {
        tasks.map( (item) => {
          const { id } = item
          return (
          <Task key={id} {...item} 
            changeStatusTask={changeStatusTask} 
            deleteTask={deleteTask}
            startEditTask={startEditTask}
            finishEditTask={finishEditTask}
          />
          );
        })
      }
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  changeStatusTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  startEditTask: PropTypes.func.isRequired,
  finishEditTask: PropTypes.func.isRequired
};

export default TaskList;
