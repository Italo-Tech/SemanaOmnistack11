const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./Controllers/OngController');

const incidentController = require('./Controllers/incidentsController');
const ProfileController = require('./Controllers/ProfileController');
const SessionController = require('./Controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);


/**
 * Query
 * Route
 * Body
 */

// Validação da ONGS
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);


// Validação Verificando se o ID é válido
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);


// Validação List incidents
// routes.get('/incidents', incidentController.index);
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number().required(),
    })
}), incidentController.index);


// Criação dos Incidents
routes.get('/incidents', incidentController.create);
// routes.post('/incidents', celebrate({
//     [Segments.HEADERS]: Joi.object({
//         authorization: Joi.string().required(),
//     }).unknown(),
// **Dica Diego: .set('Authorization', 'aqui tem que ser um id válido')

//     [Segments.BODY]: Joi.object().keys({
//         title: Joi.string().required(),
//         description: Joi.string().required(),
//         value: Joi.number().required(),
//     })
// }), incidentController.create);


// Validação no Delete
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number(),
    })
}), incidentController.delete);

module.exports = routes;