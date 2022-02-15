import axios from 'axios';

const getPlayers = ({ country, trUpperbound = 25000 }) => {
  const url = 'http://localhost:4000/players';
  return axios.get(url, { params: { country, trUpperbound } })
    .then((res) => res.data)
    .catch((err) => err);
};

const getPlayer = (username) => {
  const url = `http://localhost:4000/players/${username}`;
  return axios.get(url)
    .then((res) => res.data)
    .catch((err) => err);
};

export {
  getPlayers,
  getPlayer,
};
