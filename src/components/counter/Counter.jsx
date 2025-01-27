import classNames from "classnames";
import styles from "./counter.module.scss";

// size : 'xl' | 'l'

export const Counter = ({ value, increment, decrement, size = "xl" }) => {
  return (
    <div>
      <button
        className={classNames(styles.button, size === "xl" && styles.xl, {
          [styles.xl]: size === "xl",
        })}
        style={{ width: size }}
        onClick={increment}
      >
        +
      </button>
      {value}
      <button onClick={decrement}>-</button>
    </div>
  );
};
