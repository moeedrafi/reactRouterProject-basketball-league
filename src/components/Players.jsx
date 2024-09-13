import { useLocation, useSearchParams } from "react-router-dom";
import usePlayers from "../hooks/usePlayers";

export const Players = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams(location.search);

  const team = searchParams.get("teamId");
  const { loading, response: players } = usePlayers(team);
  console.log(players);

  if (loading) {
    return <h1>LOADING...</h1>;
  }

  return (
    <div className="container">
      <div className="sidebar-list">
        <h4 className="header">Players</h4>
        <ul>
          {players.map((player) => (
            <li key={player.id}>{player.name}</li>
          ))}
        </ul>
      </div>

      <div className="text-center">Select a player</div>
    </div>
  );
};
