const dbConfig = require('../../config/config');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: 0,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('Conectado..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

//Clientes
db.clientes = require('./clientes.js')(sequelize, DataTypes)

//Tipo de productos
db.tipo_productos = require('./tipo_productos')(sequelize, DataTypes)

//Estado de productos
db.estado_productos = require('./estado_productos')(sequelize, DataTypes)

//Estado de actividades
db.estado_actividades = require('./estado_actividades')(sequelize, DataTypes)

//Productos
db.productos = require('./productos')(sequelize, DataTypes)
db.productos.belongsTo(db.tipo_productos, {
    foreignKey: 'tipo_id',
    as: 'tipoId',
});
db.productos.belongsTo(db.estado_productos, {
    foreignKey: 'estado_id',
    as: 'estadoId',
});

//Actividad de alquileres
db.actividad_alquileres = require('./actividad_alquileres')(sequelize, DataTypes)
db.actividad_alquileres.belongsTo(db.productos, {
    foreignKey: 'producto_id',
    as: 'productoId',
});
db.actividad_alquileres.belongsTo(db.clientes, {
    foreignKey: 'cliente_id',
    as: 'clienteId',
});
db.actividad_alquileres.belongsTo(db.estado_actividades, {
    foreignKey: 'estado_id',
    as: 'estadoId',
});


db.sequelize.sync({ force: false })
.then(() => {
    console.log('¡Conectado!')
}).catch((error) => {
    console.log(error)
})

module.exports = db