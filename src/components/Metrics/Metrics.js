import React from "react";

import MetricsCard from "./MetricsCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Metrics = () => {
  return (
    <div class="container-fluid bg-light text-dark p-1">
      <div class="container bg-light p-3">
        <h1 class="display-6 fw-bold">Metrics</h1>
      </div>
      <Container fluid="md">
        <Row>
          <MetricsCard />
          <MetricsCard />
          <MetricsCard />
          <MetricsCard />
        </Row>
      </Container>
    </div>
  );
};

export default Metrics;
