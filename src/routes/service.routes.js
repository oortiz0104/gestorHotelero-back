'use strict'

const express = require('express');
const api = express.Router();
const midAuth = require('../services/auth');
const serviceController = require('../controllers/service.controller');

//* Administrador
api.get('/testServices', [midAuth.ensureAuth, midAuth.isAdmin], serviceController.testServices);

//* Usuarios registrados

//* Administrador del hotel
api.post('/addService', [midAuth.ensureAuth, midAuth.isHotelAdmin], serviceController.addService);

api.get('/getService/:idHotel/:idService', [midAuth.ensureAuth, midAuth.isHotelAdmin], serviceController.getService);
api.get('/getServices/:idHotel', [midAuth.ensureAuth, midAuth.isHotelAdmin], serviceController.getServices);

api.put('/updateService/:idHotel/:idService', [midAuth.ensureAuth, midAuth.isHotelAdmin], serviceController.updateService);

api.delete('/deleteService/:idHotel/:idService', [midAuth.ensureAuth, midAuth.isHotelAdmin], serviceController.deleteService);

module.exports = api;