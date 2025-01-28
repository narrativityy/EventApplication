const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
  axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.API_KEY}`)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

router.get('/about', (req, res) => {
  res.send('This is the about page.');
});

module.exports = router;