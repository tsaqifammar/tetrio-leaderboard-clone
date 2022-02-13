import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CountrySelector from '../components/CountrySelector';
import LeaderboardTable from '../components/LeaderboardTable';

function Leaderboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState('');
  const [players, setPlayers] = useState([]);

  useEffect(async () => {
    const url = 'http://localhost:4000/players';
    setPlayers(await axios.get(url).then((res) => res.data));
    setIsLoading(false);
  }, []);

  const changeCountry = async (c) => {
    setCountry(c);

    const url = 'http://localhost:4000/players';
    setPlayers(await axios.get(url, { params: { country: c } })
      .then((res) => res.data));
  };

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>Tetr.io Leaderboard</h1>
          <CountrySelector country={country} onChangeHandler={changeCountry} />
          <hr />
          <LeaderboardTable />
        </>
      )}
    </div>
  );
}

export default Leaderboard;
