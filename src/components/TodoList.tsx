import React from "react";
import TodoItem from "./TodoItem";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  tasks: Task[];
  updateTask: (id: number, title: string) => void;
  toggleComplete: (id: number) => void;
  removeTask: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, updateTask, toggleComplete, removeTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          updateTask={updateTask}
          toggleComplete={toggleComplete}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
};

export default TodoList;