import React, { useContext, useState } from "react";
import { TaskContext } from "../components/TaskContext";

const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask({ title });
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex items-center space-x-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
        />
        <button
          type="submit"
          className="bg-indigo-500 text-white p-3 py-1 rounded-lg hover:bg-indigo-600"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
