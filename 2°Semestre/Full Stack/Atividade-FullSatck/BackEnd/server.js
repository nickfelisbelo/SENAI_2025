require("dotenv").config();
const express = require('express');
const app = express();
const port = 3000;

const loginRoutes = require('./src/routes/login');
const geralRoutes = require('./src/routes/geral');

app.use(express.json());

app.use(loginRoutes);
app.use(geralRoutes);

app.listen(port, () => {
    console.log('listening on ' + port);
});