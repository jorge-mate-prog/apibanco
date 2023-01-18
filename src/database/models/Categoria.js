module.exports = function(sequelize,dataTypes) {
    let alias = 'Categoria';
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true
        },
        tipo:{
            type: dataTypes.STRING
        }
    };
    let config= {
        tableName: 'categoria',
        timestamps: false,
        underscore: true
    };
    const Categoria = sequelize.define(alias,cols,config);
    Categoria.associate =function(models) {
        Categoria.hasMany(models.Cuenta, {
            as: 'cuenta',
            foreignKey: 'id_categoria'
        })
    }

    return Categoria;
}