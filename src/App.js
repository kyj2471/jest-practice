import "./App.css";
import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      text: "jest",
      checked: false,
    },
  ]);

  const testSubmit = (text) => {
    setTodo(
      todo.concat({
        id: Date.now(),
        text,
        checked: false,
      })
    );
  };

  const handleChecked = (id) => {
    setTodo(
      todo.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };
  return (
    <div className="App">
      <h1>해야만 한다</h1>
      <TodoForm testSubmit={testSubmit} />
      <TodoList
        handleChecked={handleChecked}
        handleDelete={handleDelete}
        todo={todo}
      />
    </div>
  );
}

export default App;
