import { useState } from "react";

export const AddTaskForm = ({ handleAddTask }) => {
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDate] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    handleAddTask(input, priority, dueDate);
    setInput("");
    setDate("");
    setPriority("");
  };
  return (
    <form
      onSubmit={onSubmit}
      id="task-input"
      name="task"
      className="flex flex-wrap justify-between gap-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-xl shadow-sm w-full transition-all duration-300"
    >
      {/* Task Input */}
      <input
        type="text"
        required
        value={input}
        placeholder="Enter the task"
        className="flex-grow min-w-[200px] flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
        onChange={(e) => setInput(e.target.value)}
      />

      {/* Priority Dropdown */}
      <select
        id="priority-select"
        name="priority"
        value={priority}
        required
        className="min-w-[140px] p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="" disabled>
          Priority
        </option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      {/* Due Date */}
      <input
        type="date"
        name="Task-date"
        value={dueDate}
        required
        className="min-w-[140px] p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e) => setDate(e.target.value)}
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-all"
      >
        Add
      </button>
    </form>
  );
};
