import React from 'react';

function LeaderboardTable() {
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
        <tr>
          <td>1</td>
          <td>czsmall0402</td>
          <td>327 (92.89%)</td>
          <td>352</td>
          <td>162.73</td>
          <td>2.88</td>
          <td>342.94</td>
          <td>4080 + 81</td>
          <td>
            24998.62
            <bold>
              X
            </bold>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default LeaderboardTable;
