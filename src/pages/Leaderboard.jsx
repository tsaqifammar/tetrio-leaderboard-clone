import React from 'react';
import LeaderboardHeader from '../components/LeaderboardHeader';
import LeaderboardTable from '../components/LeaderboardTable';

function Leaderboard() {
  return (
    <div>
      <LeaderboardHeader />
      <hr />
      <LeaderboardTable />
    </div>
  );
}

export default Leaderboard;
