import React from "react";
import TodoList from "./components/TodoList";
import TaskForm from "./components/TaskForm";
import { TaskProvider } from "./components/TaskContext";

const App = () => {
  return (
    <TaskProvider>
      <div className="flex justify-center">
        {" "}
        <div className=" min-h-screen bg-gray-100 p-6">
          <h1 className="inline-block rounded-full px-6 py-2 text-white text-4xl font-extrabold tracking-wide text-center mb-8 shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 shadow-blue-700/50 ">
            Advanced To-Do List
          </h1>

          <TaskForm />
          <TodoList />
        </div>
      </div>
    </TaskProvider>
  );
};

export default App;
