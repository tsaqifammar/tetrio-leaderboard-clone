import React from 'react';
import { useParams } from 'react-router-dom';

function PlayerProfile() {
  const { username } = useParams();
  return (
    <h1>
      Player Name:
      {username}
    </h1>
  );
}

export default PlayerProfile;
