const db = require('../../database/models');
const sequelize = db.sequelize;

const clienteApiController = {
    'list': async (req,res) => {
    //    res.send('Hey desde cliente-Api-Controller');
        try {
            const clientes = await db.Cliente.findAll();
            const respuesta = {
                meta: {
                    url: '/api/cliente',
                    total: clientes.length,
                    status: 200
                },
                data: clientes
            }
            res.status(200).json(respuesta);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = clienteApiController;