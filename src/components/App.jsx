import React, { useEffect, useState } from 'react';
import '../style/App.css';

// Importing Components
import Form from './Form';
import TodoList from './TodoList';

function App() {

  // Managing State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);


  // Functions
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => !todo.completed));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  // Use Effect

  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status])

  // Saving to Local Storage
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

   const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', [])
    } else {
      setTodos(JSON.parse(localStorage.getItem('todos')))
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Paul's To Do List</h1>
      </header>
      <Form
        setStatus={setStatus}
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
