const express = require('express');
const router = express.Router();

const produtosController = require("../controllers/produtos.controller");

router.get("/produtos", produtosController.listarProdutos);
router.get("/produto/:id", produtosController.buscarProdutos);
router.post("/produto", produtosController.cadastrarProduto);
router.delete("/produto/:id", produtosController.excluirProduto);
router.put("/produto", produtosController.atualizarProduto);
router.get("/mediapreco/:categoria", produtosController.medPrecoCategoria);

module.exports = router;