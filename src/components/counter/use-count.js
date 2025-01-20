import { useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState({ value: 0 });

  const onIncrement = () => {
    setCount((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  const onDecrement = () => {
    setCount((prevState) => {
      return {
        ...prevState,
        value: prevState.value - 1,
      };
    });
  };

  return {
    count: count.value,
    onIncrement,
    onDecrement,
  };
};
