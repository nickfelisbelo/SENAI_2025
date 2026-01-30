const express = require("express");
const router = express.Router();

const clienteController = require("../controller/cliente.controller");

router.get("/cliente", clienteController.listar);
router.get("/cliente/:id", clienteController.buscar);
router.post("/cliente", clienteController.cadastrar);

module.exports = router;