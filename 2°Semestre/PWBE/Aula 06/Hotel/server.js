const express = require("express");
const cors = require("cors");

// const ClientesRoutes = require("./src/routes/cliente.routes");
// const ReservaRoutes = require("./src/routes/reserva.routes");
// const QuartoRoutes = require("./src/routes/quarto.routes");


const app = express();

app.use(express.json());
app.use(cors());

// app.use(ClientesRoutes);
// app.use(ReservaRoutes);
// app.use(QuartoRoutes);

app.listen(3000, () => {
    console.log("Servidor Online na porta 3000");
});