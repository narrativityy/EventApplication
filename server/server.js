require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const routes = require('./routes');

app.use('/', cors(), express.json(), routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});