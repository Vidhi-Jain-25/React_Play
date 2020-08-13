import React from 'react';

import Todos from './todos';
import Addtodo from './addtodo';

class Concept3 extends React.Component{

  state = {
    todos:  [
      // {title:'' , details:'', id:''}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos                     // todos:todos can be written as this
    });
  }

  addtodo=(todo)=>{
    todo.id=Math.random();
     let todos=[...this.state.todos, todo]
    this.setState({
      todos
    })
  }

  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <p style={{"margin-bottom":"50px"}}>
          To learn basics of React. Here we add a new todo to our todo lists and can delete the todo once done.
        </p>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <Addtodo addtodo={this.addtodo}/>        
      </div>
    );
  }

}

export default Concept3; 