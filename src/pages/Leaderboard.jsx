import React from 'react';
import CountrySelector from '../components/CountrySelector';
import LeaderboardTable from '../components/LeaderboardTable';

function Leaderboard() {
  return (
    <div>
      <h1>Tetr.io Leaderboard</h1>
      <CountrySelector />
      <hr />
      <LeaderboardTable />
    </div>
  );
}

export default Leaderboard;
