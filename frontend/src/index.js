import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { StatisticsProvider } from "./contexts/statisticsContext";

const renderElement = document.getElementById("root");
const root = createRoot(renderElement);

root.render(
  <React.StrictMode>
    <StatisticsProvider>
      <App />
    </StatisticsProvider>
  </React.StrictMode>
);
