import Card from "react-bootstrap/Card";

function ServerCard(props) {
  return (
    <Card style={{ width: "18rem", margin: "10px" }} id={"Card_" + props.id}>
      <Card.Body id={"Card_Body_" + props.id}>
        <Card.Title id={"Card_Title_" + props.id}>{props.name}</Card.Title>      
          <div id={"IP_" + props.id}>IP: {props.ip_address}</div>
          <div id={"Status_" + props.id}>Status: {props.status}</div>
          <div id={"Software_" + props.id}>
            Software: {props.software_version}
          </div>
          <div id={"SO_" + props.id}>SO: {props.operating_system}</div>
          <div id={"Location_" + props.id}>Location: {props.location}</div>       
      </Card.Body>
    </Card>
  );
}
export default ServerCard;
