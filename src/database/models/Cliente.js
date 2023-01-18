module.exports = function(sequelize,dataTypes){
    const alias = 'Cliente';
    const cols = {
        id: {
            type: dataTypes.INTEGER(20).UNSIGNED,
            primaryKey: true
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        name: {
            type: dataTypes.STRING(50)
        },
        last_name: {
            type: dataTypes.STRING(50)
        },
        email: {
            type: dataTypes.STRING(100)
        },
        age: {
            type: dataTypes.INTEGER(2)
        },
        city: {
            type: dataTypes.STRING(50)
        },
        password: {
            type: dataTypes.STRING(100)
        }
    };
    const config = {
        tableName: 'cliente',
        timestamps: false,
        underscore: true
    };
    const Cliente = sequelize.define(alias,cols,config);
    
    return Cliente;
}