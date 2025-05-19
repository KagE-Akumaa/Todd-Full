export const TaskItem = ({ task, onToggleComplete, onDelete }) => {
  const { title, priority, dueDate } = task;
  const setColor = (priority) => {
    if (priority === "low") return "text-green-400";
    else if (priority === "medium") return "text-yellow-400";
    else return "text-red-400";
  };
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center bg-gray-500 p-4 rounded-md mb-3 shadow-md w-full max-w-[700px] hover:bg-gray-700">
        {/* CheckBox */}
        <input
          type="checkbox"
          name="Status"
          id=""
          className="h-5 w-5 cursor-pointer accent-green-500"
          checked={task.status}
          onChange={() => onToggleComplete(task.id)}
        />
        {/* Task Description */}
        <span
          className={`flex-1 ml-0 sm:ml-4 mt-2 sm:mt-0 text-white text-lg break-words whitespace-normal ${
            task.status ? "line-through text-gray-400" : ""
          }`}
        >
          {title}
        </span>
        {/*Display priority here */}
        <span className={`text-sm ${setColor(priority)} m-3 p-2`}>
          {priority.toUpperCase()}
        </span>
        <span className="text-sm text-blue-300 mr-4">
          {new Date(dueDate).toLocaleDateString()}
        </span>
        {/* Delete Button */}
        <button
          type="button"
          onClick={() => {
            onDelete(task.id);
          }}
          className="text-white m-4 p-2 border border-purple-600 rounded-2xl focus:ring-2 focus:ring-purple-400 cursor-pointer bg-red-500 hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </>
  );
};
