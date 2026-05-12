// import React, { useEffect, useState } from "react";
// import TodoForm from "./components/TodoForm";
// import TodoList from "./components/TodoList";
// import FilterButtons from "./components/FilterButtons";

// const App = () => {
//   const [tasks, setTasks] = useState(() => {
//     const saved = localStorage.getItem("tasks");

//     return saved ? JSON.parse(saved) : [];
//   });

//   const [filter, setFilter] = useState("all");

//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   const addTask = (text) => {
//     const newTask = {
//       id: Date.now(),
//       text,
//       completed: false,
//     };

//     setTasks([...tasks, newTask]);
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   const toggleComplete = (id) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id
//           ? {
//               ...task,
//               completed: !task.completed,
//             }
//           : task,
//       ),
//     );
//   };

//   const filteredTasks = tasks.filter((task) => {
//     if (filter === "active") return !task.completed;

//     if (filter === "completed") return task.completed;

//     return true;
//   });

//   return (
//     <div className="flex items-center justify-center min-h-screen p-5 bg-gray-100">
//       <div className="w-full max-w-xl p-6 bg-white shadow-lg rounded-2xl">
//         <h1 className="mb-5 text-3xl font-bold text-center">
//           Advanced Todo App
//         </h1>

//         <TodoForm addTask={addTask} />

//         <FilterButtons filter={filter} setFilter={setFilter} />

//         <TodoList
//           tasks={filteredTasks}
//           deleteTask={deleteTask}
//           toggleComplete={toggleComplete}
//         />
//       </div>
//     </div>
//   );
// };

// export default App;

import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    console.log("Component ishga tushdi");
  }, [2000]);

  return <h1>Hello</h1>;
};

export default App;
