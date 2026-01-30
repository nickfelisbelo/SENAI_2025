const express = require("express");
const router = express.Router();

const livrosController = require("../controller/livros.controller");

router.get("/livros", livrosController.listar);
router.get("/livros/:id", livrosController.buscar);
router.post("/livro", livrosController.cadastrar);
router.delete("/livro/:id", livrosController.apagar);
router.put("/livro", livrosController.alterar);
router.patch("/livro/:id", livrosController.atualizar);

module.exports = router;