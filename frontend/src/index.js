import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DataStateStore from "./context/dataStates";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <DataStateStore>
    <App />
  </DataStateStore>
  // </React.StrictMode>
);
