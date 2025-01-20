import { useCount } from "./use-count";

export const Counter = () => {
  const { count, onDecrement, onIncrement } = useCount();

  return (
    <div>
      <button onClick={onIncrement}>+</button>
      {count}
      <button onClick={onDecrement}>-</button>
    </div>
  );
};
