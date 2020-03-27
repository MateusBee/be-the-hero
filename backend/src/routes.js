const express = require('express');
const crypto = require('crypto');

const connection = require('./database/connection');

const OngController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileControler = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

routes.post('/session', sessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', incidentController.index);
routes.get('/incidents/ong', profileControler.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;