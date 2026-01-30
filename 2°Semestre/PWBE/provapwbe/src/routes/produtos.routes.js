const express = require("express");
const router = express.Router();

const produtoController = require("../controller/produtos.controller");

router.put("/produtos/:codigo", produtoController.alterar);
router.get("/produto/:codigo", produtoController.buscar);
router.post("/produto", produtoController.cadastrar);
router.get("/produtos", produtoController.listar);

module.exports = router;