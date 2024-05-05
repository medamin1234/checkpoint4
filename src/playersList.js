import players from "./player.json";
import PlayerCard from "./player";

const PlayerList = () => {
  return (
    <div style={{ display: "flex" }}>
      {players.map((v, i) => (
        <PlayerCard {...v} key={i} />
      ))}
    </div>
  );
};
export default PlayerList;
