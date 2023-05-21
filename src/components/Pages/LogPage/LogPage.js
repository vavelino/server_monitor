import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const LogTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchTableData = () => {
      fetch("http://localhost/ServerMonitor/logs.php")
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "error") return;
          setTableData(data);
        })
        .catch((error) => {
          console.error("Ocorreu um erro:", error);
        });
    };

    fetchTableData();

    const interval = setInterval(fetchTableData, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>Server ID</th>
          <th>Name</th>
          <th>Status Code</th>
          <th>Description</th>
          <th>Date/Time</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{row.server_id}</td>
            <td>{row.name}</td>
            <td>{row.status_code}</td>
            <td>{row.log_descript}</td>
            <td>{row.logs_date_time}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default LogTable;
