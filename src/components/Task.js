import React from "react";
import cn from 'classnames';
import { formatDistanceToNow } from 'date-fns';
import PropTypes, { func } from 'prop-types';

const Task = ({ id, description, created, editing, done, changeStatusTask, deleteTask, startEditTask, finishEditTask  }) => {

  const className = cn({
    'completed': done && !editing,
    'active': !done && !editing,
    'editing': editing
  })

  function editTask(e) {

    if (e.keyCode === 13) {
      finishEditTask(id , e.target.value.trim());
      e.target.value = '';
    }
  }

  return (
    <li className={className}>
      <div className="view">
        <input className="toggle" type="checkbox" onClick={() => changeStatusTask(id)} defaultChecked={done}/>
        <label>
          <span className="description">{description}</span>
          <span className="created">created: {formatDistanceToNow(created, { includeSeconds: true })}</span>
        </label>
        <button className="icon icon-edit" onClick={() => startEditTask(id)}></button>
        <button className="icon icon-destroy" onClick={() => deleteTask(id)}></button>
      </div>
      {editing ? <input type="text" className="edit" defaultValue={description} onKeyDown={editTask} autoFocus onBlur={() => finishEditTask(id, description)} /> : null}
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  editing: PropTypes.bool.isRequired,
  status: PropTypes.string,
  done: PropTypes.bool.isRequired,
  changeStatusTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  startEditTask: PropTypes.func.isRequired,
  finishEditTask: PropTypes.func.isRequired
};

export default Task;