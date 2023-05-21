import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RoutesPages from "./components/RoutesPages";
import LogTable from "./components/Pages/LogPage/LogPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RoutesPages />
  </React.StrictMode>
);
