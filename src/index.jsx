import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./style.css";
import "font-awesome/css/font-awesome.min.css";

import { App } from "./app";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
