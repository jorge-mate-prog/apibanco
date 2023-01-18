const express = require('express');
const clienteApiController = require('../apicontrollers/clienteApiControllers');
const clienteApiRoute = express.Router();

clienteApiRoute.get('/',clienteApiController.list);

module.exports = clienteApiRoute;