const express = require("express");
const cors = require("cors");
const app = express();

// const ClienteRoutes = require("./src/routes/cliente.routes");
const ReservaRoutes = require("./src/routes/reserva.routes");

app.use(express.json());
app.use(cors());

app.use(ReservaRoutes);
// app.use(ClienteRoutes);

app.listen(3000, () => {
    console.log("Servidor Online na porta 3000");
});