const express = require("express");
const cors = require("cors");

const ClientesRoutes = require("./src/routes/usuarios.routes");
const LivrosRoutes = require("./src/routes/livros.routes");

const app = express();

app.use(express.json());//Habilita comunicação via JSON
app.use(cors());//Habilita requisição local

//Importar as Rotas configuradas
app.use(UsuariosRoutes);
app.use(LivrosRoutes);

app.listen(3000, () => {
    console.log("Servidor Online na porta 3000");
});
