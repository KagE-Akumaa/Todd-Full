import { useEffect, useState, useCallback } from "react";

import { TaskList } from "./Components/TaskList";
import { AddTaskForm } from "./Components/AddTaskForm";
import { EditModal } from "./Components/EditModal";

import "./App.css";

const BASE_URL = "http://localhost:4500";
function App() {
  const [tasks, setTasks] = useState([]);
  //For modal to edit task
  const [showModal, setShowModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

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

  const onDelete = useCallback(async (id) => {
    await fetch(`${BASE_URL}/todos/${id}`, {
      method: "DELETE",
    });

    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, []);

  // Function called on Add Task
  const handleAddTask = async (input, priority, dueDate) => {
    try {
      const res = await fetch(`${BASE_URL}/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: input, priority, dueDate }),
      });
      if (!res.ok) {
        const errorData = res.json();
        throw new Error(errorData.error || "Failed to Add task");
      }
      const newTask = await res.json();
      setTasks((prevTasks) => [...prevTasks, newTask]);
    } catch (error) {
      console.error("Add task error:", error.message);
    }
  };

  const onEdit = async (updatedTask) => {
    try {
      const res = await fetch(`${BASE_URL}/todos/${updatedTask.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask),
      });
      if (!res.ok) {
        throw new Error("Failed to update task");
      }
      //update the task
      setTasks((prevTasks) => {
        return prevTasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        );
      });
      setShowModal(false);
    } catch (err) {
      console.error("Edit failed:", err.message);
    }
  };

  return (
    <div className="min-h-screen bg-purple-500 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-purple-800 mb-6">My Todo List</h1>
      <div className={showModal ? "blur-sm pointer-events-none" : ""}>
        <AddTaskForm handleAddTask={handleAddTask}></AddTaskForm>
        <TaskList
          tasks={tasks}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          setShowModal={setShowModal}
          setTaskToEdit={setTaskToEdit}
        ></TaskList>
      </div>
      {showModal && taskToEdit && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-sm bg-black/40 z-10 transition-opacity duration-300 opacity-100">
          <EditModal
            task={taskToEdit}
            onClose={() => setShowModal(false)}
            onEdit={onEdit}
          ></EditModal>
        </div>
      )}
    </div>
  );
}
export default App;
