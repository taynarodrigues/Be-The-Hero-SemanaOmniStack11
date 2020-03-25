const express = require('express');

const OngController = require('./controllers/OngController');

const routes = express.Router();

// criando uma rota com a listagem das ongs
routes.get('/ongs', OngController.index);

// função assíncrona async
routes.post('/ongs', OngController.create);

module.exports = routes;