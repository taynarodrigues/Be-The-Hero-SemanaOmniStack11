
const express = require('express');
const cors = require('cors'); //importando cors. Módulo cors: vai determinar quem vai poder acessar a aplicação 
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();


app.use(cors());
app.use(express.json());

app.use(routes);
app.use(errors());

module.exports = app;