import { useEffect, useState, useCallback, useMemo } from "react";

import { TaskList } from "./Components/TaskList";
import { AddTaskForm } from "./Components/AddTaskForm";
import { EditModal } from "./Components/EditModal";
import { Filtering } from "./Components/Filtering";
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

  const [filters, setFilters] = useState({
    time: "all",
    priority: "all",
    status: "",
  });
  const onFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // used memo so that it won't recalculate for every re-render

  const FilteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      // Time filter
      if (filters.time === "today") {
        const today = new Date().toISOString().split("T")[0];
        if (!task.dueDate || !task.dueDate.startsWith(today)) return false;
      } else if (filters.time === "week") {
        const now = new Date();
        const endOfWeek = new Date();
        endOfWeek.setDate(now.getDate() + 7);
        const dueDate = new Date(task.dueDate);
        if (isNaN(dueDate) || dueDate < now || dueDate > endOfWeek)
          return false;
      }

      // Priority filter
      if (filters.priority !== "all" && task.priority !== filters.priority) {
        return false;
      }

      // Status filter
      if (filters.status !== "") {
        const statusBool = filters.status === "true"; // convert string to boolean
        if (task.status !== statusBool) return false;
      }

      return true;
    });
  }, [tasks, filters]);

  return (
    <div className="min-h-screen bg-purple-300 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-purple-800 mb-6">My Todo List</h1>
      <div className={showModal ? "blur-sm pointer-events-none" : ""}>
        <AddTaskForm handleAddTask={handleAddTask}></AddTaskForm>
        <Filtering onFilterChange={onFilterChange}></Filtering>
        <TaskList
          tasks={FilteredTasks}
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
