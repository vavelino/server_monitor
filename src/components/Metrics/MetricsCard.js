import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Card from "react-bootstrap/Card";

Chart.register(...registerables);

const MetricsCard = () => {
  return (
    <Card style={{ width: "500px", height: "300px" }}>
      <Card.Body>
        <Card.Title>Nome Servidor</Card.Title>
        <Card.Text >
          <Line 
            data={{
              labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
              datasets: [
                {
                  label: "CPU Usage",
                  data: [1, 10, 50, 20, 30, 2],
                  backgroundColor: "rgba(0, 99, 132, 0.2)",
                  borderColor: "rgba(0, 99, 132, 1)",
                  borderWidth: 1,
                },
                {
                  label: "Memory Usage",
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: "rgba(255, 99, 132, 0.2)",
                  borderColor: "rgba(255, 99, 132, 1)",
                  borderWidth: 1,
                },
              ],
            }}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MetricsCard;
