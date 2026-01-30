const express = require('express');
const cors = require('cors');

const app = express();

const alunosRoutes = require("./src/routes/alunos.routes");
const oficinasRoutes = require("./src/routes/oficinas.routes");
const inscricaoRoutes = require("./src/routes/inscricoes.routes");
const relatorioRoutes = require("./src/routes/relatorios.routes");

app.use(express.json());
app.use(cors());

app.use(alunosRoutes);
app.use(oficinasRoutes);
app.use(inscricaoRoutes);
app.use(relatorioRoutes);

app.listen(3000, () => {
    console.log("Servidor Online");
});