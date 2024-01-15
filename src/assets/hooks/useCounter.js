import { useState } from "react";

export const useCounter = ({ minCount = 0, maxCount }) => {
  const [count, setCount] = useState(minCount);

  const handleMinusCount = () => {
    setCount((prevCount) =>
      prevCount === minCount ? maxCount : prevCount - 1
    );
  };

  const handlePlusCount = () => {
    setCount((prevCount) =>
      prevCount === maxCount ? minCount : prevCount + 1
    );
  };

  return { count, setCount, handleMinusCount, handlePlusCount };
};
