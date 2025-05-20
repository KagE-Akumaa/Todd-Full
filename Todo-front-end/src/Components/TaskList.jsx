import { TaskItem } from "./TaskItem";

export const TaskList = ({
  tasks,
  onToggleComplete,
  onDelete,
  setShowModal,
  setTaskToEdit,
}) => {
  {
    return (
      <div className="max-h-[80vh] overflow-y-auto pr-2">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              task={task}
              onToggleComplete={onToggleComplete}
              onDelete={onDelete}
              setShowModal={setShowModal}
              setTaskToEdit={setTaskToEdit}
            ></TaskItem>
          );
        })}
        ;
      </div>
    );
  }
};
