import React from 'react';

const ListOfPlayers = () => {
  const players = [
    { name: "Virat", score: 85 },
    { name: "Rohit", score: 45 },
    { name: "Dhoni", score: 90 },
    { name: "Kohli", score: 65 },
    { name: "Gill", score: 75 },
    { name: "Pant", score: 35 },
    { name: "Hardik", score: 95 },
    { name: "Rahul", score: 60 },
    { name: "Jadeja", score: 70 },
    { name: "Bumrah", score: 55 },
    { name: "Shami", score: 80 }
  ];

  const allPlayers = players.map((player, index) => (
    <li key={index}>{player.name} - {player.score}</li>
  ));

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>{allPlayers}</ul>

      <h2>Players with score below 70</h2>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfPlayers;