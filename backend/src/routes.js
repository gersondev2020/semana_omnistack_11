const express = require('express');

const OngController = require('./controllers/OngController');
const incidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();
routes.post('/session', SessionController.create);
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/index', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;