const { INTEGER } = require("sequelize");

module.exports = function(sequelize,dataTypes){
    const alias = 'Cuenta';
    const cols = {
        id: {
            type: dataTypes.INTEGER(20),
            primaryKey: true
        },
        saldo: {
            type: dataTypes.INTEGER(10)
        }
    };
    const config = {
        tableName: 'cuenta',
        timestamps: false,
        underscore: true
    };
    const Cuenta = sequelize.define(alias,cols,config);
    Cuenta.associate = function(models){
        Cuenta.hasMany(models.Cliente, {
            as:'cliente',
            foreignKey: 'id_cuenta'
        })
    }

    return Cuenta;
}