import axios from 'axios';

const PROXY_URL = 'https://tetrio-leaderboard-proxy.herokuapp.com';

const getPlayers = ({ country, trUpperbound = 25000 }) => {
  const url = `${PROXY_URL}/players`;
  return axios.get(url, { params: { country, trUpperbound } })
    .then((res) => res.data)
    .catch((err) => err);
};

const getPlayer = (username) => {
  const url = `${PROXY_URL}/players/${username}`;
  return axios.get(url)
    .then((res) => res.data)
    .catch((err) => err);
};

export {
  getPlayers,
  getPlayer,
};
