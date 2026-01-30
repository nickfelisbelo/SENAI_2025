require("dotenv").config();
const express = require('express');
const app = express();
const port = 3000;

const veiculoRoutes = require('./src/routes/veiculo');
const loginRoutes = require('./src/routes/login');

app.use(express.json());

app.use(veiculoRoutes);
app.use(loginRoutes);

app.listen(port, () => {
    console.log('listening on ' + port);
});