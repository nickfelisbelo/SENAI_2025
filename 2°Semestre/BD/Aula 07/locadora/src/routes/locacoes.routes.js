const express = require('express');
const router = express.Router();

const locacoesController = require("../controllers/locacoes.controller");

router.get("/locacoes", locacoesController.listarLocacoes);
router.get("/locacao/:id", locacoesController.buscarLocacao);
router.post("/locacao", locacoesController.cadastrarLocacao);
router.delete("/locacao/:id", locacoesController.excluirLocacao);
router.put("/locacao", locacoesController.atualizarLocacao);
router.get("/locacoes/:cliente_id", locacoesController.listarId);
router.get("/locacoess/:status", locacoesController.listarStatus);
router.get("/locacoesfaturar", locacoesController.faturamentoLocacoes);
router.get("/locacoesfaturstatus", locacoesController.faturamentoLocacoesStatus);
router.get("/locacoesmes/:data_locacao", locacoesController.faturamentoLocacoesMes);
router.get("/locacoesMeses", locacoesController.faturamentoLocacoesMeses);

module.exports = router;