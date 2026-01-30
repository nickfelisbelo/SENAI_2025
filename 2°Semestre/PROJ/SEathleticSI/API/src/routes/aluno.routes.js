const express = require('express');
const router = express.Router();

const alunosController = require("../controllers/aluno.controller");

router.get("/alunos", alunosController.listarAlunos);
router.get("/aluno/:id", alunosController.buscarAluno);
router.post("/aluno", alunosController.cadastrarAluno);
router.delete("/aluno/:id", alunosController.excluirAluno);
router.put("/aluno/:id", alunosController.atualizarAluno);

module.exports = router;