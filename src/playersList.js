import players from "./player.json";
import playerCard from "./player";

const playerList = () => {
  return (
    <div style={{ display: "flex" }}>
      {players.map((v, i) => (
        <playerCard items={v} key={i} />
      ))}
    </div>
  );
};
