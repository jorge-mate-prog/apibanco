const express = require('express');
const cuentaControll = require('../controllers/cuentaControllers');
const cuentaRoute = express.Router();

cuentaRoute.get('/list',cuentaControll.list);

module.exports = cuentaRoute;