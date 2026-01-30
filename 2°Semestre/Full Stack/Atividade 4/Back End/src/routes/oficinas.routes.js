const express = require('express');
const router = express.Router();

const oficinasController = require("../controllers/oficinas.controllers");

router.get("/oficinas", oficinasController.listarOficinas);
router.post("/oficina", oficinasController.cadastrarOficina);
router.delete("/oficina/:id", oficinasController.excluirOficina);
router.put("/oficina/:id", oficinasController.atualizarOficina);

module.exports = router;