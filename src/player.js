import Card from "react-bootstrap/Card";

const playerCard = ({ playerList }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={playerList.image} />
      <Card.Body>
        <Card.Title>{playerList.name}</Card.Title>
        <Card.Text>{playerList.age}</Card.Text>
        <Card.Text>{playerList.nationnality}</Card.Text>
        <Card.Text>{playerList.jerseyNumber}</Card.Text>
      </Card.Body>
    </Card>
  );
};
