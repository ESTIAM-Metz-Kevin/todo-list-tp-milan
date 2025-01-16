import { StrictMode } from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
