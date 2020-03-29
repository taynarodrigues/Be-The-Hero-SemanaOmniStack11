const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.create ); //criar uma sessão

routes.get('/ongs', OngController.index);
/**
 * Query
 * Route
 * Body
 */

routes.post('/ongs', celebrate({
    
    // Sempre q um objeto: 'a chave dele' for uma variável do JS colocar entre colchetes
    // Validação de um objeto ->  Joi.object().keys({ }) e depois descrever cada uma das validações dentro
    [ Segments.BODY]: Joi.object().keys({ 
        name: Joi.string().required(),
        email: Joi.string().required(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    }) 
}) , OngController.create); //com o Celebrate antes e depois 'OngController.create' para poder a validação ocorrer

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required().required(),
    }).unknown(), //toda requisição em http envia vários headers e utiliz-se 'unknown' para as propriedades q não estão validando ele simplesmente descarte-as 
}) , ProfileController.index);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}) ,IncidentController.index);

routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}),IncidentController.delete);

module.exports = routes;