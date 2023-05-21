import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./components/Layout/Layout";
import ServerList from "./components/ServerList";
import ServerCard from "./components/ServerCard/ServerCard";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Layout />
    <ServerList />
  </React.StrictMode>
);
