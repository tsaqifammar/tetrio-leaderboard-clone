import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPlayer } from '../fetchData';

function PlayerProfile() {
  const { username } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [player, setPlayer] = useState(null);

  useEffect(async () => {
    setPlayer(await getPlayer(username));
    setIsLoading(false);
  }, []);

  return (
    isLoading ? (
      <div className="container">
        <h1 className="header-title">Loading...</h1>
      </div>
    ) : (
      <div className="container">
        <h1>
          Player Name:
          {username}
        </h1>
        <div>{JSON.stringify(player)}</div>
      </div>
    )
  );
}

export default PlayerProfile;
