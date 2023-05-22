import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";

const SettingsPage = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchTableData = () => {
      fetch("http://localhost/ServerMonitor/settings.php")
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "error") return;
          
          setTableData(data);
        })
        .catch((error) => {
          console.error("An error occurred:", error);
        });
    };

    fetchTableData();
  }, []);

  const updateSetting = (settingsId, showLog, showMetrics) => {
    const formData = new FormData();
    formData.append("settings_id", settingsId);
    formData.append("show_log", showLog);
    formData.append("show_metrics", showMetrics);
  
    axios
      .post("http://localhost/ServerMonitor/settings.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);       
        const updatedTableData = tableData.map((row) => {
          if (row.settings_id === settingsId) {
            return {
              ...row,
              show_log: showLog,
              show_metrics: showMetrics,
            };
          }
          return row;
        });
        setTableData(updatedTableData);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };
  

  return (
    <Table striped bordered>
      <thead>
        <tr>          
          <th>Name</th>    
          <th>Show Log</th>
          <th>Show Metrics</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>           
            <td>{row.name}</td>           
            <td>
              {row.show_log === "1" ? (
                <div>
                  <h6>Enabled</h6>
                  <Button
                    id={"show_log_button_" + index}
                    variant="danger"
                    onClick={() =>
                      updateSetting(row.settings_id, "0", row.show_metrics)
                    }
                  >
                    Disable
                  </Button>
                </div>
              ) : (
                <div>
                  <h6>Disabled</h6>
                  <Button
                    id={"show_log_button_" + index}
                    variant="success"
                    onClick={() =>
                      updateSetting(row.settings_id, "1", row.show_metrics)
                    }
                  >
                    Enable
                  </Button>
                </div>
              )}
            </td>
            <td>
              {row.show_metrics === "1" ? (
                <div>
                  <h6>Enabled</h6>
                  <Button
                    id={"show_metrics_button_" + index}
                    variant="danger"
                    onClick={() =>
                      updateSetting(row.settings_id, row.show_log, "0")
                    }
                  >
                    Disable
                  </Button>
                </div>
              ) : (
                <div>
                  <h6>Disabled</h6>
                  <Button
                    id={"show_metrics_button_" + index}
                    variant="success"
                    onClick={() =>
                      updateSetting(row.settings_id, row.show_log, "1")
                    }
                  >
                    Enable
                  </Button>
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default SettingsPage;
