import Card from "react-bootstrap/Card";

const PlayerCard = ({
  name = "UNKNOWN",
  age = "UNKNOWN",
  nationnality = "UNKNOWN",
  jerseyNumber = "UNKNOWN",
  image,
}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <div>
        <Card.Img
          variant="top"
          src={image}
          style={{ height: "80", width: "100" }}
        />
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{age}</Card.Text>
        <Card.Text>{nationnality}</Card.Text>
        <Card.Text>{jerseyNumber}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default PlayerCard;
