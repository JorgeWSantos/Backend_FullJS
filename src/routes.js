const express = require('express');
const SessionController = require('./controllers/SessionController')

const routes = express.Router();
//req.query.params. -- acessa os atributos query
//req.params. -- acessa os atributos pela rota ''/users/:id''
//req.body -- acessar o corpo da requisição
routes.post('/sessions', SessionController.store)

module.exports = routes;