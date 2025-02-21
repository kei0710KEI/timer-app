import { useState, useEffect } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25分
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const toggleTimer = () => setIsRunning(!isRunning);

  return (
    <div className="text-center p-6 bg-gray-800 text-white rounded-lg">
      <h2 className="text-4xl font-bold">
        {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
      </h2>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 rounded text-white"
        onClick={toggleTimer}
      >
        {isRunning ? "停止" : "開始"}
      </button>
    </div>
  );
};

export default Timer;
