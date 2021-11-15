import React from "react";

const TodoItem = ({ todo, handleChecked, handleDelete }) => {
  const { id, text, checked } = todo;

  return (
    <div>
      <div
        onClick={() => handleChecked(id)}
        style={{ textDecoration: checked ? "line-through" : "none" }}
      >
        {text}
      </div>
      <button onClick={() => handleDelete(id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
