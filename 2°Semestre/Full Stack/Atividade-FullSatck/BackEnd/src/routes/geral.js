const geralController = require('../controllers/geral');

const express = require('express');

const { validaAdministrador, validaAmbos, validaAtendente, validaMedico } = require('../middlewares/validaCargo');
const validate = require('../middlewares/auth');

const geralRoutes = express.Router();

geralRoutes.get('/listar/consultas', validate, geralController.listarconsultas);
geralRoutes.post('/agendar/consulta', validate, validaAmbos, geralController.agendarConsulta);
geralRoutes.delete('/deletar/consulta/:id', validate, validaAdministrador, geralController.excluirConsulta);
geralRoutes.get('/listar/paciente/:id_medico', validate, validaMedico, geralController.listarPaciente);
geralRoutes.get('/relatorio', validate, validaAdministrador, geralController.relatorio);

module.exports = geralRoutes;


// listarconsultas, ok
// agendarConsulta, ver
// excluirConsulta, ver
// listarPaciente, ver
// relatorio ok