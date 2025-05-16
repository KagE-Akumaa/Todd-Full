export const TaskItem = ({ task, onToggleComplete, onDelete }) => {
  return (
    <>
      <div className="flex items-center bg-gray-800 p-4 rounded-md mb-3 shadow-md w-[500px]">
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
          className={`flex-1 ml-4 text-white text-lg ${
            task.status ? "line-through text-gray-400" : ""
          }`}
        >
          {task.desc}
        </span>
        {/* Delete Button */}
        <button
          className="bg-red-500 m-3 w-[130px] h-[50px] rounded-lg text-white  border-2 border-red-500 hover:bg-red-700 cursor-pointer"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};
