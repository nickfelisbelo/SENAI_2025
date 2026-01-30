const express = require('express');

const postsController = require("../controllers/posts");
const validate = require("../middlewares/auth");

const { validaGerente } = require("../middlewares/validaCargo");
const { validaSupervisor } = require("../middlewares/validaCargo");

const postsRoutes = express.Router();

postsRoutes.get('/posts', validate, validaGerente, postsController.listarposts);
postsRoutes.post('/cadastrar/post', validate, validaGerente, postsController.cadastrarpost);
postsRoutes.delete('/excluirpost/:id', validate, validaSupervisor, postsController.excluirPost);
postsRoutes.put('/atualizarpost/:id', validate, validaSupervisor, postsController.atualizarPost);

module.exports = postsRoutes;