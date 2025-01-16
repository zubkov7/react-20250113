import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");

const reactRoot = createRoot(rootElement);

// reactRoot.render(
//   createElement(
//     "ul",
//     { style: { color: "red" }, className: "someClass" },
//     [1, 2, 3, 4, 5].map((item) => createElement("li", {}, item))
//   )
// );

// jsx
reactRoot.render(
  <ul style={{ color: "red" }} className='someClass'>
    {[1, 2, 3, 4, 5].map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);
