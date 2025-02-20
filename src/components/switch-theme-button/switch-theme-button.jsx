import { use } from "react";
import { Button } from "../button/button";
import { ThemeContext } from "../theme-context";

export const SwitchThemeButton = () => {
  const { value, toggleTheme } = use(ThemeContext);

  return (
    <Button onClick={toggleTheme}>
      {value === "dark" ? "Switch to light" : "Switch to dark"}
    </Button>
  );
};
