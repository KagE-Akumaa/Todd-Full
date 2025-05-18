import { useEffect, useState, useCallback } from "react";

import { TaskList } from "./Components/TaskList";
import { AddTaskForm } from "./Components/AddTaskForm";

import "./App.css";
const BASE_URL = "http://localhost:4500";
function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTodos = async () => {
    const res = await fetch(`${BASE_URL}/todos`);
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const onToggleComplete = useCallback((id) => {
    // Update UI immediately
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );

    // Fire and forget backend call (optionally handle errors)
    fetch(`${BASE_URL}/todos/${id}`, { method: "PUT" }).catch(console.error);
  }, []);

  // const onDelete = (id) => {
  //   setTasks((prevTasks) => {
  //     return prevTasks.filter((task) => {
  //       return task.id !== id;
  //     });
  //   });
  // };
  const onDelete = useCallback(async (id) => {
    await fetch(`${BASE_URL}/todos/${id}`, {
      method: "DELETE",
    });

    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, []);

  const handleAddTask = async (input) => {
    const res = await fetch(`${BASE_URL}/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: input }),
    });
    const newTask = await res.json();

    //setTasks([...tasks, newTask]); // works fine but not the best practice
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-cyan-400 mb-6">My Todo List</h1>
      <AddTaskForm handleAddTask={handleAddTask}></AddTaskForm>
      <TaskList
        tasks={tasks}
        onToggleComplete={onToggleComplete}
        onDelete={onDelete}
      ></TaskList>
    </div>
  );
}
export default App;
