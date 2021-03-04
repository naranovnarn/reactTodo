import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import TaskList from "./TaskList";


class App extends React.Component {

  fakeId = 100

  state = this.props.data

  changeStatusTask = (id) => {
    const oldTasks = [...this.state.tasks]

    const newTasks = oldTasks.map(item => {
      if (item.id === id) {
        return {...item, done: !item.done}
      }
      return item;
    })

    this.setState({
      tasks: newTasks
    })
  }
  
  deleteTask = (id) => {

    const oldTasks = [...this.state.tasks]

    const newTasks = oldTasks.filter(item => item.id !== id)

    this.setState({
      tasks: newTasks
    })
    
  }

  deleteCompletedtask = () => {
    const oldTasks = [...this.state.tasks];
    const newTasks = oldTasks.filter(item => !item.done)
    this.setState({
      tasks: newTasks
    })
  }

  addTask = (description) => {

    const newTask = {
      editing: false,
      id: this.fakeId++,
      created: new Date(),
      description,
      done: false
    }

    this.setState({
      tasks: [...this.state.tasks, newTask]
    })

  }

  startEditTask = (id) => {
    const oldTasks = [...this.state.tasks]

    const newTasks = oldTasks.map(item => {
      if (item.id === id) {
        return {...item, editing: true}
      }
      return item;
    })

    this.setState({
      tasks: newTasks
    })
  }

  finishEditTask = (id, text) => {
    const oldTasks = [...this.state.tasks]

    const newTasks = oldTasks.map(item => {
      if (item.id === id) {
        return {...item, editing: false, description: text}
      }
      return item;
    })

    this.setState({
      tasks: newTasks
    })
  }


  renderList = () => {

    const filter = this.state.filterTask

    switch (filter) {
      case 'All' : return this.state.tasks;
      case 'Active': return this.state.tasks.filter(item => !item.done);
      case 'Completed': return this.state.tasks.filter(item => item.done);
      default: return this.state.tasks;
    }
  }

  changeFilter = (term) => {
    this.setState({
      filterTask: term
    })
  }

  render() {

    const renderListItem = this.renderList();

    const count = this.state.tasks.filter(item => !item.done).length;

    return (
      <section className="todoapp">
        <Header addTask={this.addTask}/>
        <section className="main">
          <TaskList 
            startEditTask={this.startEditTask}
            finishEditTask={this.finishEditTask}
            tasks={renderListItem} 
            changeStatusTask={this.changeStatusTask} 
            deleteTask={this.deleteTask} 
          />
          <Footer 
            changeFilter={this.changeFilter} 
            filter={this.state.filterTask} 
            deleteCompletedtask={this.deleteCompletedtask}
            count={count}
          />
        </section>
      </section>
    );
  }
}

App.defaultProps = {
  data: {
    tasks : [
      {
        editing: false,
        done: true,
        id: 1,
        created: new Date(2020, 6, 2),
        description: "Completed task",
      },
      {
        editing: false,
        done: true,
        id: 2,
        created: new Date(2021, 6, 2),
        description: "Editing task",
      },
      {
        editing: false,
        done: false,
        id: 3,
        created: new Date(1992, 6, 2),
        description: "Active task",
      },
    ],
    filterTask: 'All'
  }
};


export default App;
