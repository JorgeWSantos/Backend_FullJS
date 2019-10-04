const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')

const routes = express.Router();
const upload = multer(uploadConfig);

//req.query.params. -- acessa os atributos query
//req.params. -- acessa os atributos pela rota ''/users/:id''
//req.body -- acessar o corpo da requisição
routes.post('/sessions', SessionController.store)
routes.post('/spots', upload.single('thumbnail'),SpotController.store)
routes.get('/spots',SpotController.index)

module.exports = routes;