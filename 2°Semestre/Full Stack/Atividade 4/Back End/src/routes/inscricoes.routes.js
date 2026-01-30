const express = require('express');
const router = express.Router();

const inscricaoController = require("../controllers/inscricoes.controllers");

router.get("/inscricoes", inscricaoController.listarInscricoes);
router.post("/inscricao", inscricaoController.cadastrarInscricao);
router.delete("/inscricao/:id", inscricaoController.excluirInscricao);
router.put("/inscricao/:id", inscricaoController.atualizarInscricao);

module.exports = router;