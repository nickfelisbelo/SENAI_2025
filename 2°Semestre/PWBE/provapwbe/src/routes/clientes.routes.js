const express = require("express");
const router = express.Router();

const clienteController = require("../controller/clientes.controller");

router.post("/cliente", clienteController.cadastrar);
router.get("/cliente/:cpf", clienteController.buscar);

module.exports = router;