const express = require('express');
const router = express.Router();

const pedidosController = require("../controllers/pedidos.controller");
const { route } = require('./produtos.routes');

router.get("/pedidos", pedidosController.listarPedidos);
router.get("/pedido/:id", pedidosController.buscarPedidos);
router.post("/pedido", pedidosController.cadastrarPedido);
router.delete("/pedido/:id", pedidosController.excluirPedido);
router.put("/pedido", pedidosController.atualizarPedido);
router.get("/totalproduto/:id", pedidosController.totalVendidoProd);
router.get("/totalpedidos/:status", pedidosController.quantPedStatus);

module.exports = router;