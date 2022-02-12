import axios from 'axios';
import React, { useState } from 'react';
import CountrySelector from '../components/CountrySelector';
import LeaderboardTable from '../components/LeaderboardTable';

function Leaderboard() {
  const [country, setCountry] = useState('');
  const [players, setPlayers] = useState([]);

  const changeCountry = async (c) => {
    setCountry(c);
    setPlayers(await axios.get('http://localhost:4000/players', { params: { country: c } })
      .then((res) => res.data));
  };

  return (
    <div>
      <h1>Tetr.io Leaderboard</h1>
      <CountrySelector country={country} onChangeHandler={changeCountry} />
      <hr />
      <LeaderboardTable />
    </div>
  );
}

export default Leaderboard;
