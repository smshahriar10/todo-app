import React, { useState } from "react";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<Array<{ id: number; title: string; completed: boolean }>>([]);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          title: newTask,
          completed: false,
        },
      ]);
      setNewTask("");
    }
  };

  const updateTask = (id: number, title: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title: title } : task
    );
    setTasks(updatedTasks);
  };

  const toggleComplete = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-[600px] mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="border p-2 mr-2 flex-grow rounded-md"
            placeholder="Enter a new todo"
          />
          <button
            onClick={addTask}
            className="bg-black text-white p-2 rounded-md"
          >
            Add
          </button>
        </div>
        <TodoList
          tasks={tasks}
          updateTask={updateTask}
          toggleComplete={toggleComplete}
          removeTask={removeTask}
        />
      </div>
    </div>
  );
};

export default App;