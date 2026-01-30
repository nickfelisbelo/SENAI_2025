const express = require("express");
const router = express.Router();

const quartoController = require("../controller/quarto.controller");

router.get("/quarto", quartoController.listar);
router.get("/quarto/:id", quartoController.buscar);
router.post("/quarto/:id/:dias", quartoController.simularEstadia);

module.exports = router;