const express = require('express');
const clienteControll = require('../controllers/clienteControllers');
const clienteRoute = express.Router();

clienteRoute.get('/list',clienteControll.list);

module.exports = clienteRoute;