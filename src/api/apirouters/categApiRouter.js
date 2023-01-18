const express = require('express');
const catApiController = require('../apicontrollers/categApiControllers');
const catApiRoute = express.Router();

catApiRoute.get('/',catApiController.list);

module.exports= catApiRoute;