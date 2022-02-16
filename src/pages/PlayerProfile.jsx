import React, { useEffect, useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import Info from '../components/Info';
import StatsHeader from '../components/StatsHeader';
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
      <div className="container-2">
        <h1 className="header-title">Loading...</h1>
      </div>
    ) : (
      <div className="container-2">
        <div className="profile-header">
          <div className="header-name">
            <h1 className="header-title">{player.username}</h1>
            <ReactCountryFlag countryCode={player.country} style={{ fontSize: '36px' }} />
          </div>
          <div className="friends">
            <svg className="friend-icon" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.5161 3.68874C19.2058 2.9669 18.7584 2.31277 18.1988 1.76298C17.6389 1.21154 16.9787 0.773325 16.2542 0.472155C15.5029 0.15862 14.6971 -0.0018648 13.8835 1.63478e-05C12.7422 1.63478e-05 11.6286 0.314 10.6609 0.90708C10.4294 1.04895 10.2095 1.20478 10.0011 1.37457C9.79279 1.20478 9.57286 1.04895 9.34135 0.90708C8.37364 0.314 7.26009 1.63478e-05 6.11876 1.63478e-05C5.2969 1.63478e-05 4.50052 0.158171 3.74811 0.472155C3.02118 0.774509 2.36601 1.20943 1.80345 1.76298C1.24319 2.31215 0.795642 2.96643 0.486167 3.68874C0.164371 4.43998 0 5.23773 0 6.05874C0 6.83323 0.157426 7.64028 0.469961 8.46129C0.731565 9.14741 1.10661 9.8591 1.58583 10.5778C2.34518 11.7151 3.38928 12.9013 4.68572 14.1037C6.83412 16.0969 8.96167 17.4738 9.05196 17.5296L9.60064 17.8831C9.84372 18.039 10.1563 18.039 10.3993 17.8831L10.948 17.5296C11.0383 17.4715 13.1635 16.0969 15.3143 14.1037C16.6107 12.9013 17.6548 11.7151 18.4141 10.5778C18.8934 9.8591 19.2707 9.14741 19.53 8.46129C19.8426 7.64028 20 6.83323 20 6.05874C20.0023 5.23773 19.8379 4.43998 19.5161 3.68874Z" fill="#A3D391" />
            </svg>
            <h2 className="friend-count">{player.friend_count}</h2>
          </div>
        </div>
        <div className="profile-details">
          <div className="left">
            <img className="profile-picture" src="https://tetr.io/user-content/avatars/5e844b0868270e617d52c990.jpg" alt="" />
            <Card>
              <>
                <Info name="online games" value={player.gamesplayed.toString()} />
                <Info name="of which wins" value={player.gameswon.toString()} />
              </>
            </Card>
          </div>
          <div className="right">
            <Card>
              <>
                <StatsHeader
                  rankLetter={player.league.rank}
                  rating={player.league.rating.toFixed(2)}
                  glicko={player.league.glicko.toFixed(2)}
                  rd={Math.round(player.league.rd)}
                  rankGlobal={player.league.standing}
                  rankLocal={player.league.standing_local}
                />
                <hr />
                <Info name="games played" value={player.league.gamesplayed.toString()} />
                <Info
                  name="games won"
                  value={player.league.gamesplayed.toString()}
                  extra={`(${((parseFloat(player.league.gameswon) / parseFloat(player.league.gamesplayed)) * 100).toFixed(2)}%)`}
                />
                <Info
                  name="percentile"
                  value={`${Math.round(((1 - parseFloat(player.league.percentile)) * 100))}th`}
                  extra={`(top ${(parseFloat(player.league.percentile) * 100).toFixed(2)}%)`}
                />
                <Info name="apm" value={player.league.apm.toString()} />
                <Info name="pps" value={player.league.pps.toString()} />
                <Info name="pps" value={player.league.vs.toString()} />
              </>
            </Card>
          </div>
        </div>
      </div>
    )
  );
}

export default PlayerProfile;
