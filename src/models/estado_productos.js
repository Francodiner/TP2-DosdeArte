module.exports = (sequelize, DataTypes) => {

  const EstadoProducto = sequelize.define("estado_productos", {
    nombre: {
      type: DataTypes.STRING
    },
  })

  return EstadoProducto
}