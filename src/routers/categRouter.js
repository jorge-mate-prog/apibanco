const express = require('express');
const categControll = require('../controllers/categControllers');
const catgRoute = express.Router();

catgRoute.get('/categList',categControll.list);
// Mostrar Formulario
catgRoute.get('/create',categControll.create);
// Crear Categoria
catgRoute.post('/create',categControll.processCreate);

module.exports = catgRoute;