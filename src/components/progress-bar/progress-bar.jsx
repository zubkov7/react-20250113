"use client";

import { useProgress } from "./use-progress";

import styles from "./progress-bar.module.css";
import classNames from "classnames";
import { ThemeContext } from "../theme-context";
import { use } from "react";

export const ProgressBar = ({ viewVariant = "default" }) => {
  const progress = useProgress();

  const { value } = use(ThemeContext);

  return (
    <div
      className={classNames(styles.progressBar, {
        [styles.default]: viewVariant === "default",
        [styles.colored]: viewVariant === "colored",
        [styles.light]: value === "light",
      })}
      style={{
        width: progress,
      }}
    />
  );
};
