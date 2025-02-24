"use client";

import classNames from "classnames";
import styles from "./button.module.css";
import { useFormStatus } from "react-dom";
import { ThemeContext } from "../theme-context";
import { use } from "react";

export const Button = ({
  children,
  onClick,
  className,
  viewVariant = "default",
  formAction,
}) => {
  const { value } = use(ThemeContext);

  const { pending } = useFormStatus();

  return (
    <button
      className={classNames(styles.root, className, {
        [styles.default]: viewVariant === "default",
        [styles.big]: viewVariant === "big",
        [styles.dark]: value === "dark",
        [styles.light]: value === "light",
      })}
      onClick={onClick}
      formAction={formAction}
      disabled={pending}
    >
      {pending ? "loading..." : children}
    </button>
  );
};
