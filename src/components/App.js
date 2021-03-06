import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import TaskList from "./TaskList";


const generateKey = (pre) => {
  return `${ pre }_${ new Date().getTime() }`;
}


class App extends React.Component {

  state = {
    tasks : [],
    filterTask: 'All'
  }

  componentDidUpdate() {
    localStorage.setItem('data', JSON.stringify(this.state))
  }

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('data'))
    this.setState({
      ...data
    })
  }


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
      id: generateKey(description),
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
          {
            renderListItem.length > 0 ? 
              <TaskList 
              startEditTask={this.startEditTask}
              finishEditTask={this.finishEditTask}
              tasks={renderListItem} 
              changeStatusTask={this.changeStatusTask} 
              deleteTask={this.deleteTask} 
              />
              :
              <h2>there's no todos yet</h2>
          }
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




export default App;
