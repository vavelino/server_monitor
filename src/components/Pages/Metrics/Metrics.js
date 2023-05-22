import React, { useEffect, useState } from "react";
import MetricsCard from "./MetricsCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Metrics = () => {
  const [servers, setServers] = useState([]);
  const fetchServers = async () => {
    try {
      const response = await fetch("http://localhost/ServerMonitor/serverMetrics.php");
      const data = await response.json();
      setServers(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    fetchServers();
  }, []);
  return (
    <div className="container-fluid bg-light text-dark p-1">
      <div className="container bg-light p-3">
        <h1 className="display-6 fw-bold">Metrics</h1>
      </div>
      <Container fluid="md" id="containnerMetrics">
        <Row>
          {servers.map((server) => (
            <MetricsCard name={server.name} status={server.status} id = {server.server_id}/>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Metrics;
