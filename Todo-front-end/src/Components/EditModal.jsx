import { useState } from "react";

export const EditModal = ({ task, onClose, onEdit }) => {
  const [title, setTitle] = useState(task.title);
  const [priority, setPriority] = useState(task.priority);
  const [dueDate, setDueDate] = useState(task.dueDate);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedTasks = { ...task, title, priority, dueDate };
    onEdit(updatedTasks);
  };

  return (
    <form
      onSubmit={handleEditSubmit}
      className="w-full max-w-3xl p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl flex flex-col gap-6 transition-all"
    >
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
        Edit Task
      </h2>

      <div className="flex flex-wrap gap-6 justify-between">
        {/* Title Input */}
        <div className="flex flex-col w-full sm:w-[45%]">
          <label className="text-gray-700 dark:text-gray-300 mb-1">Title</label>
          <input
            type="text"
            value={title}
            required
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Priority Dropdown */}
        <div className="flex flex-col w-full sm:w-[25%]">
          <label className="text-gray-700 dark:text-gray-300 mb-1">
            Priority
          </label>
          <select
            value={priority}
            required
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="" disabled>
              Priority
            </option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        {/* Due Date Input */}
        <div className="flex flex-col w-full sm:w-[25%]">
          <label className="text-gray-700 dark:text-gray-300 mb-1">
            Due Date
          </label>
          <input
            type="date"
            value={dueDate}
            required
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 pt-4">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-xl transition"
        >
          Save
        </button>
        <button
          type="button"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-xl transition"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </form>
  );
};
