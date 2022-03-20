import React from 'react';

// Importing components
import Todo from './Todo'

const TodoList = ({ filteredTodos, todos, setTodos }) => {
  return(
    <div className="todo-container">
      <ul className="todo-list">
        { filteredTodos.map(todo => <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id}/>) }
      </ul>
    </div>
  );
}

export default TodoList;
