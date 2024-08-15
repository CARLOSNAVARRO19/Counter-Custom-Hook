import { useState } from "react";

export const useCounter = (valueInital) => {
  const [count, setCount] = useState(valueInital);

  const handleIncrease = (value) => {
    setCount(count + value);
  };

  const handleDecrease = (value) => {
    count && setCount(count - value);
  };

  const handleReset = () => {
    setCount(0);
  };

  return {
    count,
    handleIncrease,
    handleDecrease,
    handleReset,
  };
};
