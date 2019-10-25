const express = require('express');
const AcessoController = require('./controllers/AcessoController');

const Rotas = express.Router()

Rotas.get('/acessos', AcessoController.listar);

module.exports = Rotas;