import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';

import { todos } from './todos.json';

import TodoForm from './components/TodoForm';

// se pueden tener varias clases
//className es el class que se utiliza normalmento en HTML pero en JSX se utiliza className
//<todoForm /> llamo al componente que cree
//siempre que se cree un constructor se le pone super(); para que herede la funcionabilidad de react
//map es un metodo de JS que recorre uno a uno el objeto 
//filter recorre cada objeto y analiza que este completo
class App extends Component {
  constructor() {
      super();
      this.state = {
          todos
      };

      this.handleAddTodo = this.handleAddTodo.bind(this);
  }  
  
  handleAddTodo(todo) {
      this.setState({
        todos: [...this.state.todos, todo]
      })
  }

  removeTodo(index) {
    if(window.confirm('Estas seguro de querer eliminarlo')) {
        this.setState({
            todos: this.state.todos.filter((e, i) => {
                return i !== index
            })
        })
    }
  }

  render() {
   const todos = this.state.todos.map((todo, i) => {
        return (
            <div className="col-md-4 mb-4">
                <div className="card">
                    <div className="card-header">
                        <h3>{todo.title}</h3>
                        <spam className="badge badge-pill badge-danger ml-2">
                            {todo.priority}
                        </spam>
                    </div>
                    <div className="card-body">
                        <p>{todo.description}</p>
                        <p><mark>{todo.responsible}</mark></p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-danger" onClick={this.removeTodo.bind(this, i)}>Delete</button>
                    </div>
                </div>
            </div>
        )
    });

    return (
      <div className="App">
            <nav className="navbar navbar-dark bg-dark">
                <a href="" className="text-white">
                    Task
                    <spam className="badge badge-pill badge-light ml-2">
                        { this.state.todos.length }
                    </spam>
                </a>
            </nav>
            
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-3">
                        <h1><mark>ca901</mark></h1>
                        <TodoForm onAddTodo={this.handleAddTodo} />
                    </div>
                    <div className=" col-md-9">
                        <div className="row">
                            { todos }

                        </div>
                    </div>
                </div>
            </div>
            
            
          
      </div>
    );
  }
}

export default App;
