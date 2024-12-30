import React, { useState } from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

interface TodoItemProps {
  task: { id: number; title: string; completed: boolean };
  updateTask: (id: number, title: string) => void;
  toggleComplete: (id: number) => void;
  removeTask: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, updateTask, toggleComplete, removeTask }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>(task.title);

  const handleSave = () => {
    if (newTitle.trim()) {
      updateTask(task.id, newTitle);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center justify-between mb-2 p-2 bg-gray-100 rounded-md">
      <div className="flex items-center flex-grow">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
          className="mr-2"
        />
        {isEditing ? (
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="mr-2 p-1 flex-grow rounded-md"
          />
        ) : (
          <span className={task.completed ? "line-through" : ""}>{task.title}</span>
        )}
      </div>

      <div className="flex space-x-2">
        <button
          onClick={isEditing ? handleSave : () => setIsEditing(true)}
          className="bg-white text-black p-2 rounded-md"
        >
          <FaRegEdit />
        </button>
        <button
          onClick={() => removeTask(task.id)}
          className="bg-red-500 text-white p-2 rounded-md"
        >
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;