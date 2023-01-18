const db = require('../../database/models');
const sequelize = db.sequelize;

const cuentaApiControll = {
    'list': async (req,res) => {
    //    res.send('Hey desde cuentaApiController');
        try {
            const cuentas = await db.Cuenta.findAll();
            const respuesta = {
                meta:{
                    url: '/api/cuenta',
                    total: cuentas.length,
                    status: 200
                },
                data: cuentas
            }
            res.status(200).json(respuesta);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = cuentaApiControll;