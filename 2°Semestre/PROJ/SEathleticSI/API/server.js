const express = require('express');
const cors = require('cors');

const app = express();

const alunoRoutes = require("./src/routes/aluno.routes");
const professoresRoutes = require("./src/routes/professor.routes");

app.use(express.json());
app.use(cors());

app.use(alunoRoutes);
app.use(professoresRoutes);

app.listen(3000, () => {
    console.log("Servidor Online");
});