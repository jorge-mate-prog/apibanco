const db = require('../database/models');
const sequelize = db.sequelize;

const clienteControll = {
    'list': async (req,res) =>{
        try {
            const clientes = await db.Cliente.findAll();
            res.render('cliente/list',{
                title:'Listado Clientes',clientes});
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = clienteControll;