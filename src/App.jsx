import { useEffect, useState } from "react";
import { TaskList } from "./Components/TaskList";
import { AddTaskForm } from "./Components/AddTaskForm";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onToggleComplete(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  }

  // const onDelete = (id) => {
  //   setTasks((prevTasks) => {
  //     return prevTasks.filter((task) => {
  //       return task.id !== id;
  //     });
  //   });
  // };
  const onDelete = (id) =>
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));

  const handleAddTask = (input) => {
    const newTask = {
      id: Date.now(),
      desc: input,
      status: false,
    };

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
