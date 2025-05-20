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
      className="flex w-[700px] mb-6"
    >
      
      <input
        type="text"
        required
        value={input}
        placeholder="Enter the task"
        className="flex-grow p-3 border m-4 border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 text-black"
        onChange={(e) => setInput(e.target.value)}
      />
      {/* Priority */}
      <select
        id="priority-select"
        name="priority"
        value={priority}
        className="text-black m-4 p-2 border border-purple-600 rounded focus:ring-2 focus:ring-purple-400 cursor-pointer"
        onChange={(e) => setPriority(e.target.value)}
        required
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
        required
        className="text-black m-4 p-2 border border-purple-600 rounded focus:ring-2 focus:ring-purple-400 cursor-pointer"
        onChange={(e) => setDate(e.target.value)}
      />

      <button
        type="submit"
        className="text-black m-4 p-2 border border-purple-600 rounded-2xl focus:ring-2 focus:ring-purple-400 cursor-pointer bg-cyan-300 hover:bg-cyan-700"
      >
        Add
      </button>
    </form>
  );
};
