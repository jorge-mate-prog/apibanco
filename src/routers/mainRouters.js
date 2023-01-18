const express = require('express')
const mainRout = express.Router();

mainRout.get('/',(req,res) => {
    res.send('Hola desde Router!');
})

module.exports = mainRout;