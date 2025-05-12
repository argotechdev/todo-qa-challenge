import React, { useState, useEffect } from "react";
import "./styles.css";
import TodoItem from "./components/TodoItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  useEffect(() => {
    const safeTasks = tasks.map(task => ({
      ...task,
      title: task.title.replace(/[\"'<>\\{}!@#$%¨&*()]/g, '')
    }));
    localStorage.setItem("tasks", JSON.stringify(safeTasks));
  }, [tasks]);

  const addTask = () => {
    // if (newTask.trim() === "") return;

    const task = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };

    setTasks([...tasks, task]);
  };

  const toggleComplete = (id) => {
    setTimeout(() => {
      const updated = tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
      setTasks(updated);
    }, 100);
  };

  const deleteTask = (id) => {
    const updated = tasks.filter((task) => task.id !== id);
    setTasks(updated);
  };

  const editTask = (id, newTitle) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, title: newTitle } : task
    );
    setTasks(updated);
  };

  return (

    <div className="container">
      <div className="logo-container">
        <img src="/argo-logo.png" alt="Argo Tech Logo" className="logo" />
      </div>
      <h1>To-Do List</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Nova tarefa"
          value={newTask}
          maxLength={50}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Adicionar</button>
      </div>

      <p className="count">
        Total: {tasks.length} | Concluídas: {tasks.filter((t) => t.done).length}
        { }
      </p>

      <ul className="task-list">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onToggle={toggleComplete}
            onDelete={deleteTask}
            onEdit={editTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
