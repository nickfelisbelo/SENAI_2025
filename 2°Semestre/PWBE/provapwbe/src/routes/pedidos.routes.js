const express = require("express");
const router = express.Router();

const pedidosController = require("../controller/pedidos.controller");

router.patch("/pedido/:id", pedidosController.atualizar);
router.get("/pedidos", pedidosController.listar);
router.post("/pedido", pedidosController.cadastrar);

module.exports = router;