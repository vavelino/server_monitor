import Card from "react-bootstrap/Card";

function ServerCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <div>{props.ip}</div>
          <div>{props.ip_address}</div>
          <div>{props.status}</div>
          <div>{props.software_version}</div>
          <div>{props.location}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ServerCard;
