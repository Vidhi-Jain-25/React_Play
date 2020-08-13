import React from 'react';

const Todos = ({todos, deleteTodo}) => {     

  const todoList = todos.length ? (
    todos.map(todo => {
      if (todo.details.length > 1) {
        return (
          <div className="collection-item" key={todo.id}>
            <div>Title: {todo.title}</div>
            <div>Details:  {todo.details}</div>
            <button onClick={()=>{ deleteTodo(todo.id) }}>Delete Todo</button>
          </div>
        );
      }
      else {
        return null;
      }
    })
  ) : (
    <p className="center">You have no todo's left, yay!</p>
  );

  return (
    <div className="todos collection">
      {todoList}
    </div>
  );

}

export default Todos;