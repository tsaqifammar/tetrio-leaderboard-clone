import axios from 'axios';

const getPlayers = (country = '') => {
  const url = 'http://localhost:4000/players';
  return axios.get(url, { params: { country } })
    .then((res) => res.data)
    .catch((err) => err);
};

export default getPlayers;
