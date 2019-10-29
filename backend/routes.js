const express = require('express');
const AcessoController = require('./controllers/AcessoController');

const Rotas = express.Router()

Rotas.get('/acessos', AcessoController.listar);
Rotas.get('/acessos/:id', AcessoController.selecionar);
Rotas.post('/acessos', AcessoController.inserir);
Rotas.put('/acessos', AcessoController.atualizar);
Rotas.delete('/acessos', AcessoController.excluir);

module.exports = Rotas;