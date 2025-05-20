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
    <div className="flex items-center justify-center bg-gray-700 w-[900px] h-[500px] rounded-2xl shadow-2xl">
      <form className="flex w-[700px] mb-6" onSubmit={handleEditSubmit}>
        <input
          type="text"
          value={title}
          className="text-black m-4 p-2 border border-purple-600 rounded focus:ring-2 focus:ring-purple-400 cursor-pointer "
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          id="priority-select"
          name="priority"
          value={priority}
          className="text-black m-4 p-2 border border-purple-600 rounded focus:ring-2 focus:ring-purple-400 cursor-pointer"
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="" disabled>
            Priority
          </option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input
          type="date"
          name="Task-date"
          id=""
          value={dueDate}
          className="text-black m-4 p-2 border border-purple-600 rounded focus:ring-2 focus:ring-purple-400 cursor-pointer"
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button
          type="submit"
          className="text-black m-4 p-2 border border-purple-600 rounded-2xl focus:ring-2 focus:ring-purple-400 cursor-pointer bg-cyan-300 hover:bg-cyan-700"
        >
          Save
        </button>
        <button
          type="button"
          className="text-black m-4 p-2 border border-purple-600 rounded-2xl focus:ring-2 focus:ring-purple-400 cursor-pointer bg-red-300 hover:bg-red-700"
          onClick={onClose}
        >
          Close
        </button>
      </form>
    </div>
  );
};
