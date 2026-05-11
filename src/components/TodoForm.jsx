import React, { useState } from "react";

const TodoForm = ({ addTask }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    addTask(text);

    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-5">
      <input
        type="text"
        placeholder="Enter task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 p-3 border border-gray-300 outline-none rounded-xl"
      />

      <button
        type="submit"
        className="px-5 text-white bg-blue-500 rounded-xl hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
