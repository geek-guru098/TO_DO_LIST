import React, { useContext } from "react";
import { TaskContext } from "../components/TaskContext";

const TodoItem = ({ task }) => {
  const { deleteTask, toggleCompletion } = useContext(TaskContext);

  return (
    <li className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleCompletion(task.id)}
          className="mr-4"
        />
        <span className={task.completed ? "line-through" : ""}>
          {task.title}
        </span>
      </div>
      <div>
        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
