const express = require('express');
const cors = require('cors');

const produtoRoutes = require("./src/routes/produtos.routes");
const pedidosRoutes = require("./src/routes/pedidos.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use(produtoRoutes);
app.use(pedidosRoutes);

app.listen(3000, () => {
    console.log("Servidor Online");
});