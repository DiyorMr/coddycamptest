import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, deleteTask, toggleComplete }) => {
  return (
    <div className="space-y-3">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks found</p>
      ) : (
        tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
