const express = require('express');
const mainApiControll = require('../apicontrollers/mainApiControllers');
const mainApiRout = express.Router();

mainApiRout.get('/inicio', mainApiControll.inicio);
mainApiRout.get('/list', mainApiControll.list);

module.exports = mainApiRout;