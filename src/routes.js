const express = require('express');

const routes = express.Router();
//req.query.params. -- acessa os atributos query
//req.params. -- acessa os atributos pela rota ''/users/:id''
//req.body -- acessar o corpo da requisição
routes.post('/users', (req, res) => {
    return res.json(req.body);
})

module.exports = routes;