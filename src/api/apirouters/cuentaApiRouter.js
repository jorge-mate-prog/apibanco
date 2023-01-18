const express = require('express');
const cuentaApiControll = require('../apicontrollers/cuentaApiControllers');
const cuentaApiRoute = express.Router();

cuentaApiRoute.get('/',cuentaApiControll.list);

module.exports = cuentaApiRoute;