import React, { Component } from 'react';
import Todos from './Todos'
import AddForm from './AddForm'
import './App.css'

class App extends Component {
  state = {
    todos: [
      {id:1, content: 'buy some eggs'},
      {id:2, content: 'learn about react'},
      {id:3, content: 'exercise'}
    ]
  }

  deleteTodo = (id) =>{
    const auxtodos = this.state.todos.filter(elem => {
      return elem.id !== id
    });
    this.setState({
      todos: auxtodos
    })
  } 

  addTodo = (todo) => {
    todo.id = Math.random();
    let auxtodo = [...this.state.todos, todo];
    this.setState({
      todos: auxtodo
    })
  }

  render() {
    return (
      <div className="todo-app">
        <h1 className="banner">THINGS I NEED TO DO</h1>
          
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>

        <AddForm addTodo={this.addTodo} />       
      </div>
    );
  }
}

export default App;