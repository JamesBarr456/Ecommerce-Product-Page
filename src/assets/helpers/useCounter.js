import { useState } from "react";

export const useCounter = ({ minCount, maxCount }) => {
  const [count, setCount] = useState(minCount);

  const handleMinusCount = () => {
    setCount((prevCount) => (prevCount === minCount ? 4 : prevCount - 1));
  };

  const handlePlusCount = () => {
    setCount((prevCount) => (prevCount === maxCount ? 1 : prevCount + 1));
  };

  return { count, setCount, handleMinusCount, handlePlusCount };
};
