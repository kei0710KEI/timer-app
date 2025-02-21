import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

const TaskList = () => {
  const tasks = useQuery(api.tasks.getTasks) || [];

  return (
    <ul className="mt-4 space-y-2">
      {tasks.map((task) => (
        <li key={task._id} className="p-2 bg-gray-200 rounded">
          {task.title}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
