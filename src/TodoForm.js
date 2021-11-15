import React, { useState } from "react";

const TodoForm = ({ testSubmit }) => {
  const [input, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    testSubmit(input);
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={onChange} value={input} placeholder="할일" />
      <button onClick={handleSubmit} type="submit">
        추가
      </button>
    </form>
  );
};

export default TodoForm;
