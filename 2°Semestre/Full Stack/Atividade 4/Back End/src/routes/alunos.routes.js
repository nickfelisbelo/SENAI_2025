const express = require('express');
const router = express.Router();

const alunoController = require("../controllers/alunos.controllers");

router.get("/alunos", alunoController.listarAlunos);
router.post("/aluno", alunoController.cadastrarAluno);
router.delete("/aluno/:id", alunoController.excluirAluno);
router.put("/aluno/:id", alunoController.atualizarAluno);

module.exports = router;