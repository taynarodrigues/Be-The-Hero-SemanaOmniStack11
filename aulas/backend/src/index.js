
const express = require('express');
const cors = require('cors'); //importando cors. Módulo cors: vai determinar quem vai poder acessar a aplicação 

const routes = require('./routes');

const app = express();


app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3333);