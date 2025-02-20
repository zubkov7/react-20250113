import classNames from "classnames";
import styles from "./button.module.css";
import { ThemeContext } from "../theme-context";
import { use } from "react";

export const Button = ({
  children,
  onClick,
  className,
  viewVariant = "default",
}) => {
  const { value } = use(ThemeContext);

  return (
    <button
      className={classNames(styles.root, className, {
        [styles.default]: viewVariant === "default",
        [styles.big]: viewVariant === "big",
        [styles.dark]: value === "dark",
        [styles.light]: value === "light",
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
