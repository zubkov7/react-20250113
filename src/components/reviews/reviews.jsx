import { use } from "react";
import { ThemeContext } from "../theme-context";

export const Reviews = ({ reviews }) => {
  const { theme } = use(ThemeContext);

  return (
    <div style={{ color: theme === "dark" ? "orange" : "blue" }}>
      <h3>Reviews</h3>
      {reviews?.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </div>
  );
};
