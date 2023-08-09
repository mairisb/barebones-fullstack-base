import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/app.component";

const rootEl = document.querySelector("#root");
if (!rootEl) {
  throw new Error("Cannot find root element");
}
const root = createRoot(rootEl);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
