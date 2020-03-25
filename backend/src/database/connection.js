// importando o knex
const knex = require('knex');

// importa as configurações do banco de dados
const configuration = require('../../knexfile');

// Criando conexão
const connection = knex(configuration.development);

//exportar a conexão do banco de dados
module.exports = connection;