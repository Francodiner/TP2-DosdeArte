module.exports = (sequelize, DataTypes) => {

  const TipoProducto = sequelize.define("tipo_productos", {
    nombre: {
      type: DataTypes.STRING
    },
  })

  return TipoProducto

}