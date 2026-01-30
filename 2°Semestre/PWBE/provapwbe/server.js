const express = require("express");
const cors = require("cors");

const clienteRoutes = require("./src/routes/clientes.routes");
const produtosRoutes = require("./src/routes/produtos.routes");
const pedidosRoutes = require("./src/routes/pedidos.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use(clienteRoutes);
app.use(produtosRoutes);
app.use(pedidosRoutes);

app.listen(3000, () => {
    console.log("Servidor Online na porta 3000");
});