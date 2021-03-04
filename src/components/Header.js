import React from "react";
import PropTypes from 'prop-types';

const Header = ({addTask}) => {

  function addnewTask(e) {

    if (e.keyCode === 13) {
      addTask(e.target.value.trim());
      e.target.value = '';
    }
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo" placeholder="What needs to be done?" autoFocus  onKeyDown={addnewTask}/>
    </header>
  );
};

Header.propTypes = {
  addTask: PropTypes.func.isRequired
};

export default Header;
