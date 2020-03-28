const express = require('express'); //Contém todas as funcionalidades do express disponíveis
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express(); // Criando minha aplicação


app.use(cors());
app.use(express.json()); // Converter o corpo json no insomnia em javascript
app.use(errors());
app.use(routes);

module.exports = app;

/**
 * Rota / Recurso
*/

/*
 * Métodos HTTP:
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
*/

/**
 * Tipos de  parâmetros:
 *
 * Query Parans: Parâmetros nomeados enviados na rota após o símbolo de '?' (filtros, paginação) - usa o ? para procurar
 * Route Parans: Parâmetros utilizados para identificar recursos - usa o /:id
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/**
 * SQL:MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

// npm start para executar
