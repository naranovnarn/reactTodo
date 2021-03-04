import React from "react";
import TasksFilter from './TasksFilter';
import PropTypes from 'prop-types';

const Footer = ({ changeFilter, filter, deleteCompletedtask, count }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{count} items left</span>
      <TasksFilter 
        changeFilter={changeFilter} 
        filter={filter}
      />
      <button 
        className="clear-completed"
        onClick={deleteCompletedtask}
      >Clear completed</button>
    </footer>
  );
};

Footer.propTypes = {
  count: PropTypes.number.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  deleteCompletedtask: PropTypes.func.isRequired
}

export default Footer;
