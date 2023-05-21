import React, { useEffect, useState } from "react";
import ServerCard from "./ServerCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


const ServerList = () => {
  const [servers, setServers] = useState([]);
  const fetchServers = async () => {
    try {
      const response = await fetch("http://localhost/ServerMonitor/server.php");
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
    <div class="container-fluid bg-light text-dark p-1">
      <div class="container bg-light p-3">
        <h1 class="display-4 fw-bold">Server List</h1>
      </div>
      <Container fluid="md">
        <Row>
          {servers.map((server) => (
            <ServerCard
              name={server.name}
              ip_address={server.ip_address}
              status={server.status}
              software_version={server.software_version}
              operating_system={server.operating_system}
              location={server.location}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default ServerList;
