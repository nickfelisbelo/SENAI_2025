const loginController = require('../controllers/login');

const express = require('express');

const validate = require('../middlewares/auth');
const { validaAdministrador, validaAmbos } = require('../middlewares/validaCargo');

const loginRoutes = express.Router();

loginRoutes.post('/login', loginController.Login);
loginRoutes.post('/cadastrar/medico', validate, validaAdministrador, loginController.cadastrarMedico);
loginRoutes.delete('/excluir/medico/:id', validate, validaAdministrador, loginController.excluirMedico);
loginRoutes.post('/cadastrar/paciente', validate, validaAmbos, loginController.cadastrarPaciente);
loginRoutes.delete('/excluir/paciente/:id', validate, validaAdministrador, loginController.excluirPaciente);
loginRoutes.post('/cadastrar', loginController.cadastrarLogin);

module.exports = loginRoutes;