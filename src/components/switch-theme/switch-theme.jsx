import { use } from "react";
import { ThemeContext } from "../theme-context";

export const SwitchTheme = () => {
  const { value, setTheme } = use(ThemeContext);

  const toggleTheme = () => {
    if (value === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};
