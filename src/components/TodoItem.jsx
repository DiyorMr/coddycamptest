import React from "react";

const TodoItem = ({ task, deleteTask, toggleComplete }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow rounded-xl">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />

        <p
          className={`text-lg ${
            task.completed ? "line-through text-gray-400" : "text-black"
          }`}
        >
          {task.text}
        </p>
      </div>

      <button
        onClick={() => deleteTask(task.id)}
        className="px-3 py-1 text-white bg-red-500 rounded-lg hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
