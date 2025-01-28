import React, { useState } from "react";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskDescription, setTaskDescription] = useState("");

  const addTask = () => {
    if (taskDescription.trim() !== "") {
      setTasks([
        ...tasks,
        { id: Date.now(), description: taskDescription, done: false },
      ]);
      setTaskDescription("");
    }
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const sortedTasks = [...tasks].sort((a, b) => a.done - b.done);

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h1
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
      >
        Todo List
      </h1>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Enter a task"
          style={{ flex: 1, padding: "10px", fontSize: "16px" }}
        />
        <button
          onClick={addTask}
          style={{
            padding: "10px 20px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Add
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {sortedTasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onToggle={() => toggleTask(task.id)}
            onDelete={() => deleteTask(task.id)}
          />
        ))}
      </ul>
    </div>
  );
};

const TodoItem = ({ task, onToggle, onDelete }) => {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        marginBottom: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        backgroundColor: task.done ? "#f0f0f0" : "white",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <input type="checkbox" checked={task.done} onChange={onToggle} />
        <span
          style={{
            textDecoration: task.done ? "line-through" : "none",
            color: task.done ? "gray" : "black",
          }}
        >
          {task.description}
        </span>
      </div>
      <button
        onClick={onDelete}
        style={{
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "5px 10px",
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoApp;
