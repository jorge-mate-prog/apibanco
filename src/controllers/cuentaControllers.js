const db = require('../database/models');
const sequelize = db.sequelize;

const cuentaControll = {
    'list': async (req,res) => {
        try {
            let cuentas = await db.Cuenta.findAll();
            res.render('cuenta/list',{
                title:'Listado Cuentas',
                cuentas});
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = cuentaControll;