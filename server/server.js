const express = require("express");
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

require("./config/config");

app.use(express.json(), express.urlencoded({ extended: true }), cors());


const AllMyUserRoutes = require("./routes/user-routes");
const APIRoutes = require("./routes/api-routes");

app.use('/api', APIRoutes, AllMyUserRoutes);

app.listen(port, () => console.log(`Listening on port: ${port}`));