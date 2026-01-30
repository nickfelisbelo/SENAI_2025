const express = require('express');

const veiculoController = require('../controllers/veiculo');
const validate = require("../middlewares/auth");

const veiculoRoutes = express.Router();

veiculoRoutes.get('/veiculos', validate, veiculoController.listarVeiculos);
veiculoRoutes.delete('/excluirveiculo/:placa', validate, veiculoController.deletarVeiculos);
veiculoRoutes.put('/atualizarveiculo', validate, veiculoController.atualizarVeiculos);

module.exports = veiculoRoutes;