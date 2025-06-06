export const TaskItem = ({
  task,
  onToggleComplete,
  onDelete,
  setShowModal,
  setTaskToEdit,
}) => {
  const { title, priority, dueDate } = task;

  const setColor = (priority) => {
    if (priority === "low") return "text-green-400";
    else if (priority === "medium") return "text-yellow-400";
    else return "text-red-400";
  };

  const onEdit = (task) => {
    setShowModal(true);
    setTaskToEdit(task);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm w-full transition hover:shadow-md">
      {/* Left side: Checkbox + Title */}
      <div className="flex items-start sm:items-center gap-3 flex-1">
        <input
          type="checkbox"
          className="h-5 w-5 mt-1 sm:mt-0 accent-green-500 cursor-pointer"
          checked={task.status}
          onChange={() => onToggleComplete(task.id)}
        />
        <span
          className={`text-lg text-gray-800 dark:text-white break-words flex-1 ${
            task.status ? "line-through opacity-60" : ""
          }`}
        >
          {title}
        </span>
      </div>

      {/* Right side: Metadata + Buttons */}
      <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 text-sm">
        {/* Priority */}
        <span
          className={`font-semibold ${setColor(
            priority
          )} px-2 py-1 rounded-md bg-opacity-10`}
        >
          {priority.toUpperCase()}
        </span>

        {/* Due Date */}
        <span className="text-blue-400 dark:text-blue-300">
          {new Date(dueDate).toLocaleDateString()}
        </span>

        {/* Edit Button */}
        <button
          onClick={() => onEdit(task)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          Edit
        </button>

        {/* Delete Button */}
        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
