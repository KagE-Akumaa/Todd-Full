import { TaskItem } from "./TaskItem";

export const TaskList = ({ tasks, onToggleComplete, onDelete }) => {
  {
    return (
      <div>
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              task={task}
              onToggleComplete={onToggleComplete}
              onDelete={onDelete}
            ></TaskItem>
          );
        })}
        ;
      </div>
    );
  }
};
