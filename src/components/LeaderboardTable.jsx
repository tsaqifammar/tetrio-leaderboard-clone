import React from 'react';
import PropTypes from 'prop-types';

function LeaderboardTable({ players }) {
  return (
    <table>
      <thead>
        <tr>
          <th title="Rank number">#</th>
          <th title="Name of the player">Name</th>
          <th title="Amount of VS games won">Wins</th>
          <th title="Amount of VS games played">Play Count</th>
          <th title="Attack Per Minute, average over the last 10 games">APM</th>
          <th title="Pieces Per Second, average over the last 10 games">PPS</th>
          <th title="Versus Score (general indicator of skill), average over the last 10 games">VS</th>
          <th title="Glicko-2, higher is better, followed by rating deviation (RD)">Glicko</th>
          <th title="Tetra Rating (0-25000, higher is better) and rank letter">TR</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, idx) => {
          const {
            _id,
            username,
            league: {
              gameswon,
              gamesplayed,
              apm,
              pps,
              vs,
              glicko,
              rd,
              rating,
              rank,
            },
          } = player;
          return (
            <tr key={_id}>
              <td>{idx + 1}</td>
              <td>{username}</td>
              <td>{gameswon}</td>
              <td>{gamesplayed}</td>
              <td>{apm}</td>
              <td>{pps}</td>
              <td>{vs}</td>
              <td>{`${Math.round(parseFloat(glicko))} + ${Math.round(parseFloat(rd))}`}</td>
              <td>{`${parseFloat(rating).toFixed(2)} ${rank}`}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

LeaderboardTable.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LeaderboardTable;
