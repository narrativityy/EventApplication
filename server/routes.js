const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/search', async (req, res) => {
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=${process.env.API_KEY}&keyword=${req.body.query}&city=${req.body.city}`)
        .then(response => {
            res.send(response.data)
        })
        .catch(err => {
            res.send(err).status(500)
        })
})

module.exports = router;