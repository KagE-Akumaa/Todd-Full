import { useEffect, useState, useCallback, useMemo, useContext } from "react";

import { TaskList } from "./Components/TaskList";
import { AddTaskForm } from "./Components/AddTaskForm";
import { EditModal } from "./Components/EditModal";
import { Filtering } from "./Components/Filtering";
import "./App.css";
import AuthContext from "./context/AuthContext";
import GuestToLogin from "./Components/GuestToLogin";

const BASE_URL = "http://localhost:4500";
function App() {
  const { mode, user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  //For modal to edit task
  const [showModal, setShowModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const fetchTodos = async () => {
    const res = await fetch(`${BASE_URL}/todos`);
    const data = await res.json();
    setTasks(data);
  };

  const [hasLoaded, setHasLoaded] = useState(false);

  // Load on mode change
  useEffect(() => {
    if (mode === "guest") {
      const local = localStorage.getItem("guestTodos");
      try {
        const parsed = local ? JSON.parse(local) : [];
        setTasks(parsed);
      } catch {
        setTasks([]);
      }
    } else {
      fetchTodos();
    }
    setHasLoaded(true); // ✅ mark that initial load is done
  }, [mode]);

  // Save only after first load
  useEffect(() => {
    if (mode === "guest" && hasLoaded) {
      localStorage.setItem("guestTodos", JSON.stringify(tasks));
    }
  }, [tasks, mode, hasLoaded]);

  const onToggleComplete = useCallback((id) => {
    if (mode === "guest") {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, status: !task.status } : task
        )
      );
      return;
    }
    // Update UI immediately
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );

    // Fire and forget backend call (optionally handle errors)
    fetch(`${BASE_URL}/todos/${id}`, { method: "PUT" }).catch(console.error);
  }, []);

  const onDelete = useCallback(
    async (id) => {
      if (mode === "guest") {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
        return;
      }
      await fetch(`${BASE_URL}/todos/${id}`, {
        method: "DELETE",
      });

      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    },
    [mode]
  );

  // Function called on Add Task
  const handleAddTask = async (input, priority, dueDate) => {
    if (mode === "guest") {
      const newTask = {
        id: Date.now(),
        title: input,
        priority,
        dueDate,
        status: false,
      };
      setTasks((prev) => [...prev, newTask]);
      return;
    }
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
    if (mode === "guest") {
      setTasks((prevTasks) => {
        return prevTasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        );
      });
      setShowModal(false);
      return;
    }
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
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-start p-6 transition-colors duration-300">
        <GuestToLogin />
        {/* Todo App Main Card */}
        <div
          className={`w-full max-w-2xl bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md transition-all duration-300 ${
            showModal ? "blur-sm pointer-events-none" : ""
          }`}
        >
          <AddTaskForm handleAddTask={handleAddTask} />
          <Filtering onFilterChange={onFilterChange} />
          <TaskList
            tasks={FilteredTasks}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
            setShowModal={setShowModal}
            setTaskToEdit={setTaskToEdit}
          />
        </div>

        {/* Modal Overlay */}
        {showModal && taskToEdit && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-sm bg-black/40 z-10 transition-opacity duration-300">
            <EditModal
              task={taskToEdit}
              onClose={() => setShowModal(false)}
              onEdit={onEdit}
            />
          </div>
        )}
      </div>
    </>
  );
}
export default App;
