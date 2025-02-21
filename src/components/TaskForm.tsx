import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const addTask = useMutation(api.tasks.addTask);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    await addTask({ title });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border rounded"
        placeholder="タスクを入力..."
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        追加
      </button>
    </form>
  );
};

export default TaskForm;
