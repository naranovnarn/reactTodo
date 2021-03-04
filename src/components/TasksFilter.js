import React from "react";
import cn from 'classnames';
import PropTypes from 'prop-types';

const filterButton = [
 'All',
 'Active',
 'Completed'
];

const TasksFilter = ({ changeFilter, filter }) => {
  return (
    <ul className="filters">
      {
        filterButton.map( item => {

          const className = cn({
            selected: item === filter
          })

          return (
            <li key={item} >
              <button className={className} onClick={() => changeFilter(item)}> 
                {item}
              </button>
            </li>
          );
        })
      }
    </ul>
  );
};

TasksFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
}

export default TasksFilter;
