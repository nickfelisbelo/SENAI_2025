const express = require('express');
const router = express.Router();

const clientesController = require("../controllers/clientes.controller");

router.get("/clientes", clientesController.listarClientes);
router.get("/cliente/:id", clientesController.buscarClientes);
router.post("/cliente", clientesController.cadastrarCliente);
router.delete("/cliente/:id", clientesController.excluirCliente);
router.put("/cliente", clientesController.atualizarCliente);
router.get("/locacoespendentes", clientesController.LocacoesPendentes);
router.get("/clientesgastos", clientesController.gastoCliente);
router.get("/infoclientes", clientesController.InfoClientes);

module.exports = router;