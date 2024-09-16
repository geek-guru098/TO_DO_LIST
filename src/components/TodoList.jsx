import React, { useContext } from "react";
import { TaskContext } from "../components/TaskContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet! Add some tasks.</p>
      ) : (
        <ul className="space-y-4">
          {tasks.map((task) => (
            <TodoItem key={task.id} task={task} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
