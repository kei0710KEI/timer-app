import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Timer from "../components/Timer";

const Home = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center">ポモドーロアプリ</h1>
      <Timer />
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Home;
