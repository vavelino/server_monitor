import Card from "react-bootstrap/Card";

function ServerCard(props) {
  return (
   
    <Card style={{ width: "18rem"}}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>         
          <div>IP: {props.ip_address}</div>
          <div>Status: {props.status}</div>
          <div>Software: {props.software_version}</div>
          <div>SO: {props.operating_system}</div>          
          <div>Location: {props.location}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ServerCard;
