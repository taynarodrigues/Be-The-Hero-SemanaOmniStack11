const knex = require('knex');
const configuration = require('../../knexfile');

//conexão de desenvolvimento
const connection = knex(configuration.development);

//exportar a conexão com o banco de dados
module.exports = connection;
