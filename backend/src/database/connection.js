// importando o knex
const knex = require('knex');

// importa as configurações do banco de dados
const configuration = require('../../knexfile');

//Variáveis ambientes
const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development;

// Criando conexão
const connection = knex(config);

//exportar a conexão do banco de dados
module.exports = connection;