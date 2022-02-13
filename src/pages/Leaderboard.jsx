import React, { useState, useEffect } from 'react';
import CountrySelector from '../components/CountrySelector';
import LeaderboardTable from '../components/LeaderboardTable';
import getPlayers from '../fetchData';

function Leaderboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState('');
  const [players, setPlayers] = useState([]);

  useEffect(async () => {
    setPlayers(await getPlayers());
    setIsLoading(false);
  }, []);

  const changeCountry = async (c) => {
    setCountry(c);
    setPlayers(await getPlayers(c));
  };

  return (
    isLoading ? (
      <div>
        <h1>Loading...</h1>
      </div>
    ) : (
      <div>
        <h1>Tetr.io Leaderboard</h1>
        <CountrySelector country={country} onChangeHandler={changeCountry} />
        <hr />
        <LeaderboardTable players={players} />
      </div>
    )
  );
}

export default Leaderboard;
