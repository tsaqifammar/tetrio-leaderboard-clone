const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

app.get('/players', async (req, res) => {
  const { country, trUpperbound = 25000 } = req.query;

  const params = { limit: 50, after: trUpperbound };
  if (country) params.country = country;

  const API_CALL = 'https://ch.tetr.io/api/users/lists/league';
  try {
    const players = await axios.get(API_CALL, { params });
    res.json(players.data.data.users);
  } catch (err) {
    console.error(err);
  }
});

app.listen(4000, () => {
  console.log('Proxy server started on port 4000');
});
