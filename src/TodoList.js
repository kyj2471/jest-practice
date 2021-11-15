import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todo, handleDelete, handleChecked }) => {
  return (
    <div aria-label="TodoList-test">
      {todo.map((item) => (
        <TodoItem
          todo={item}
          key={item.id}
          handleDelete={handleDelete}
          handleChecked={handleChecked}
        />
      ))}
    </div>
  );
};

export default TodoList;
