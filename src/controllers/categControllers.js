const db = require('../database/models');
const sequelize = db.sequelize;

const categControll = {
    'list': async (req,res) => {
//        res.send('Hello desde categ-Controller');
        const categorias = await db.Categoria.findAll();
        res.render('categoria/categList',{
            title:'Listado Categorías',
            categorias
        });
    },
    'create':(req,res) => {
        res.render('categoria/categCreate',
        {title: 'Crear Categoría'});
    },
    'processCreate': async (req,res) => {
        let newCategoria = req.body;
    //    console.log(body)
        try {
            await db.Categoria.create(newCategoria);
            return res.redirect('categList');
        } catch (error) {
            console.log(error);
        }
        
    }
}

module.exports = categControll;