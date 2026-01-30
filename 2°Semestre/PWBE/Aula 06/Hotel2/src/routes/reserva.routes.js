const express = require("express");
const router = express.Router();

const reservaController = require("../controller/reserva.controller");

router.get("/reserva", reservaController.listar);
router.post("/reserva/:clienteId", reservaController.cadastrar);
// router.put("/reserva/:id/checkout", reservaController.finalizar);

module.exports = router;