const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/search', async (req, res) => {
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=${process.env.API_KEY}&keyword=${req.body.query}${req.body.city? '&city=' + req.body.city : ''}`)
        .then(response => {
            // logging response for testing purposes
            console.log("response")
            res.send(response.data)
        })
        .catch(err => {
            res.send(err).status(500)
        })
})

module.exports = router;