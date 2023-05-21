import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";

Chart.register(...registerables);

const MetricsCard = (props) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "CPU Usage",
        data: [],
        backgroundColor: "rgba(0, 99, 132, 0.2)",
        borderColor: "rgba(0, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Memory Usage",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  });
  const serverId = props.id;
  let previousData = null;
  useEffect(() => {
    const fetchChartData = () => {
      fetch(
        `http://localhost/ServerMonitor/metrics.php?server_id=${serverId}`,
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.status == "error") return;
          const cpuUsageList = data.map((item) => item.cpu_usage);
          const memoryUsageList = data.map((item) => item.memory_usage);
          const labelDateList = data.map((item) => item.metrics_date_time);
          if (JSON.stringify(data) !== JSON.stringify(previousData)) {
            console.log(data);
            let newData = {
              labels: labelDateList,
              datasets: [
                {
                  label: "CPU Usage",
                  data: cpuUsageList,
                  backgroundColor: "rgba(0, 99, 132, 0.2)",
                  borderColor: "rgba(0, 99, 132, 1)",
                  borderWidth: 1,
                },
                {
                  label: "Memory Usage",
                  data: memoryUsageList,
                  backgroundColor: "rgba(255, 99, 132, 0.2)",
                  borderColor: "rgba(255, 99, 132, 1)",
                  borderWidth: 1,
                },
              ],
            };
            setChartData(newData);
          }
          previousData = data;
        })
        .catch((error) => {
          console.error("Ocorreu um erro:", error);
        });
    };
    fetchChartData();
    const interval = setInterval(() => {
      fetchChartData();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Card
      style={{ width: "500px", height: "300px", margin: "10px" }}
      id={"Card_" + props.id}
    >
      <Card.Body id={"Card_Body_" + props.id}>
        <Card.Title id={"Card_Title_" + props.id}>     
          {props.name} - {props.status}
        </Card.Title>
        <Line id={"Line_" + props.id} data={chartData} />
      </Card.Body>
    </Card>
  );
};
export default MetricsCard;
