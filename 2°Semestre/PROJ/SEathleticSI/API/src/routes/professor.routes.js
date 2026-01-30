const express = require('express');
const router = express.Router();

const professorController = require("../controllers/professor.controller");

router.get("/professores", professorController.listarProfessores);
router.get("/professor/:id", professorController.buscarProfessor);
router.post("/professor", professorController.cadastrarProfessor);
router.delete("/professor/:id", professorController.excluirProfessor);
router.put("/professor/:id", professorController.atualizarProfessor);

module.exports = router;