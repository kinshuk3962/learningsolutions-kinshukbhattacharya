import React from 'react';

const IndianPlayers = () => {
  const T20Players = ["Rohit", "Virat", "Pant", "Bumrah"];
  const RanjiPlayers = ["Pujara", "Rahane", "Jadeja"];

  const allPlayers = [...T20Players, ...RanjiPlayers];

  const oddTeam = allPlayers.filter((_, index) => index % 2 !== 0);
  const evenTeam = allPlayers.filter((_, index) => index % 2 === 0);

  return (
    <div>
      <h2>Merged Players</h2>
      <p>{allPlayers.join(", ")}</p>

      <h3>Even Team</h3>
      <ul>
        {evenTeam.map((player, index) => <li key={index}>{player}</li>)}
      </ul>

      <h3>Odd Team</h3>
      <ul>
        {oddTeam.map((player, index) => <li key={index}>{player}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;