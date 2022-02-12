import React from 'react';
import countries from '../data/country_names.json';

function LeaderboardHeader() {
  return (
    <>
      <h1>Tetr.io Leaderboard</h1>
      <label htmlFor="country">
        Country
        <select name="country" id="country">
          {
            Object.entries(countries).map(([code, name]) => (
              <option key={code} value={code}>{name}</option>
            ))
          }
        </select>
      </label>
    </>
  );
}

export default LeaderboardHeader;
