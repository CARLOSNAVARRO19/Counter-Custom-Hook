import { useCounter } from "../hooks/useCounter";
import DarkMode from "./DarkMode";

const Counter = () => {
  const { count, handleIncrease, handleDecrease, handleReset } = useCounter(0);

  return (
    <div className="grid place-items-center h-screen dark:text-white">
      <div className="relative grid place-items-center gap-y-4 border rounded-md p-6 hover:border-sky-400 transition-all duration-300 md:text-xl md:p-8 md:gap-y-8">
        <DarkMode />
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-200">
          {count}
        </h1>

        <div className="flex gap-x-4">
          <button
            className="border py-2 px-3  rounded-md hover:border-sky-400 hover:text-sky-400 hover:underline transition-all duration-300"
            onClick={() => handleDecrease(1)}
          >
            Decrease
          </button>
          <button
            className="border py-2 px-3  rounded-md hover:border-sky-400 hover:text-sky-400 hover:underline transition-all duration-300"
            onClick={() => handleReset()}
          >
            Reset
          </button>
          <button
            className="border py-2 px-3  rounded-md hover:border-sky-400 hover:text-sky-400 hover:underline transition-all duration-300"
            onClick={() => handleIncrease(1)}
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
