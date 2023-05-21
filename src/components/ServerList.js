import React, { useEffect, useState } from "react";
import ServerCard from "./ServerCard/ServerCard";

const ServerList = () => {
  const [servers, setServers] = useState([]);

  // Função para buscar os servidores
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
    // Chama a função fetchServers para buscar os servidores quando o componente montar
    fetchServers();
  }, []);

  return (
    <div>
      <h1>Server List</h1>
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
    </div>
  );
};
export default ServerList;
