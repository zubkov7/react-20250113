import { createRoot } from "react-dom/client";
import { App } from "./components/app/App";
import { StrictMode, useContext } from "react";

useContext

const rootElement = document.getElementById("root");

const reactRoot = createRoot(rootElement);

console.log(reactRoot);

reactRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
);
