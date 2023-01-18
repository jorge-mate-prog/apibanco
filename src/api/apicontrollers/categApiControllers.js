const db = require('../../database/models');
const sequelize = db.sequelize;

const catApiController = {
    'list': async (req,res) => {
    //    res.send('Hey desde CategoryApiController');
        try {
            const categorias = await db.Categoria.findAll();
        //    console.log(categorias);
            const respuesta ={
                meta:{
                    url:'/api/categoria',
                    total: categorias.length,
                    status: 200
                },
                data:categorias
            }
            res.status(200).json(respuesta);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = catApiController;