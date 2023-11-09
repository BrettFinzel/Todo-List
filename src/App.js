import React, { useState, useRef } from 'react';
import './App.css';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function App() {
  // State to manage the list of todos
  const [todos, setTodos] = useState([]);

  // Ref to access the input field
  const todoInputRef = useRef();

  // Function to add a new todo
  const addTodo = () => {
    const newTodo = todoInputRef.current.value;
    if (newTodo.trim() !== '') {
      // Generate a random background color for the new todo item
      const randomColor = getRandomColor();
      const todoObject = { text: newTodo, color: randomColor };
      setTodos([...todos, todoObject]);
      todoInputRef.current.value = ''; // Clear the input field
    }
  };

  // Function to remove a todo by index
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div>
        <input type="text" ref={todoInputRef} placeholder="Add an item" />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="todo-item" style={{ backgroundColor: todo.color }}>
            <span>{todo.text}</span>
            <button onClick={() => removeTodo(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


