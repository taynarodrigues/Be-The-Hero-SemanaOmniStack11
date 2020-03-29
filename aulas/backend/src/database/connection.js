const knex = require('knex');
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development; //variável global/variáveis ambiente 'process.envNODE_ENV

//irá chamar a conexão de testes ou conexão de desenvolvimento
const connection = knex(config);

//conexão em ambiente de testes

//exportar a conexão com o banco de dados
module.exports = connection;
