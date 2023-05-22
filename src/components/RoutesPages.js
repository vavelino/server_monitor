import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ServerList from "./Pages/ServerList/ServerList";
import Metrics from "./Pages/Metrics/Metrics";
import LogTable from "./Pages/LogPage/LogPage";
import SettingsPage from "./Pages/settingsPage/settingsPage";

const Contact = () => <h1>Configurations Page</h1>;

const RoutesPages = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Server Monitor</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Server List
            </Nav.Link>
            <Nav.Link as={Link} to="/metrics">
              Metrics
            </Nav.Link>
            <Nav.Link as={Link} to="/log">
              Log
            </Nav.Link>
            <Nav.Link as={Link} to="/configuration">
              Configuration
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<ServerList />} />
        <Route path="/metrics" element={<Metrics />} />
        <Route path="/log" element={<LogTable />} />
        <Route path="/configuration" element={<SettingsPage />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};
export default RoutesPages;
