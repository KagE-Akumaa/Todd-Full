import { useState } from "react";

export const AddTaskForm = ({ handleAddTask }) => {
  const [input, setInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    handleAddTask(input);
    setInput("");
  };
  return (
    <form
      onSubmit={onSubmit}
      id="task-input"
      name="task"
      type="text"
      className="flex w-full max-w-md mb-6"
    >
      <input
        type="text"
        value={input}
        placeholder="Enter the task"
        className="flex-grow p-3 border m-4 border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-cyan-500 m-3 w-[130px] h-[50px] rounded-lg text-white  border-2 border-cyan-500 hover:bg-cyan-700 cursor-pointer"
      >
        Add
      </button>
    </form>
  );
};
