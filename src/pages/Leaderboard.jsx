import React, { useState, useEffect } from 'react';
import CountrySelector from '../components/CountrySelector';
import LeaderboardTable from '../components/LeaderboardTable';
import getPlayers from '../fetchData';

function Leaderboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState('');
  const [players, setPlayers] = useState([]);

  useEffect(async () => {
    setPlayers(await getPlayers({}));
    setIsLoading(false);
  }, []);

  const changeCountry = async (c) => {
    setCountry(c);
    setPlayers(await getPlayers({ country: c }));
  };

  const loadMoreHandler = async () => {
    const lastPlayer = players.slice(-1)[0];
    const trUpperbound = lastPlayer.league.rating;
    const morePlayers = await getPlayers({ country, trUpperbound });
    if (morePlayers.length < 50) console.log('No more players to load :)');
    setPlayers([...players, ...morePlayers]);
  };

  return (
    isLoading ? (
      <div className="container">
        <h1 className="header-title">Loading...</h1>
      </div>
    ) : (
      <div className="container">
        <div className="leaderboard-content header">
          <h1 className="header-title">TETR.IO LEADERBOARD</h1>
          <CountrySelector country={country} onChangeHandler={changeCountry} />
        </div>
        <hr className="leaderboard-sep" />
        <div className="leaderboard-content">
          <LeaderboardTable players={players} />
          <button className="btn-load" type="button" onClick={loadMoreHandler}>LOAD MORE</button>
        </div>
      </div>
    )
  );
}

export default Leaderboard;
