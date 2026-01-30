const express = require('express');
const router = express.Router();

const relatoriosController = require("../controllers/relatorios.controllers");

router.get("/relatorio/1", relatoriosController.primeiroRelatorio);
router.get("/relatorio/2", relatoriosController.segundoRelatorio);

module.exports = router;