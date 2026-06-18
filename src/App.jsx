import React, { useState } from "react";
import { useTodo } from "./store/useTodo";

function App() {
  const [text, setText] = useState("");

  const tasks = useTodo((state) => state.tasks);
  const addTask = useTodo((state) => state.addTask);
  const deleteTask = useTodo((state) => state.deleteTask);
  const toggleTask = useTodo((state) => state.toggleTask);

  return (
    <div className="max-w-md p-5 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Todo App</h1>

      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 p-2 border"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Task yoz..."
        />
        <button
          className="px-4 text-white bg-blue-500"
          onClick={() => {
            addTask(text);
            setText("");
          }}
        >
          Add
        </button>
      </div>

      {tasks.map((task) => (
        <div key={task.id} className="flex items-center justify-between mb-2">
          <span
            onClick={() => toggleTask(task.id)}
            className={task.complated ? "line-through" : ""}
          >
            {task.text}
          </span>

          <button className="text-red-500" onClick={() => deleteTask(task.id)}>
            ❌
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
