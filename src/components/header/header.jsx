import { ToggleThemeButton } from "../toggle-theme-button/toggle-theme-button";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <span>Headphones shop</span>
      <ToggleThemeButton />
    </header>
  );
};
