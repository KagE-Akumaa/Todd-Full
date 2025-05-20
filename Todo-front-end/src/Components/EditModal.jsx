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
      className="flex flex-wrap justify-between gap-4 w-full max-w-3xl p-6 bg-purple-400 rounded-2xl shadow-lg shadow-purple-500"
      onSubmit={handleEditSubmit}
    >
      <div className="flex flex-col">
        <label className="text-white mb-1">Title</label>
        <input
          type="text"
          value={title}
          className="text-black p-2 w-60 border border-purple-600 rounded focus:ring-2 focus:ring-purple-400"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label className="text-white mb-1">Priority</label>
        <select
          value={priority}
          className="text-black p-2 w-40 border border-purple-600 rounded focus:ring-2 focus:ring-purple-400"
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

      <div className="flex flex-col">
        <label className="text-white mb-1">Due Date</label>
        <input
          type="date"
          value={dueDate}
          className="text-black p-2 w-40 border border-purple-600 rounded focus:ring-2 focus:ring-purple-400"
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>

      <div className="flex items-end gap-4 mt-4">
        <button
          type="submit"
          className="text-black p-2 border border-purple-600 rounded-2xl bg-cyan-300 hover:bg-cyan-700"
        >
          Save
        </button>
        <button
          type="button"
          className="text-black p-2 border border-purple-600 rounded-2xl bg-red-300 hover:bg-red-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </form>
  );
};
