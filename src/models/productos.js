module.exports = (sequelize, DataTypes) => {

  const Producto = sequelize.define("productos", {
    nombre: {
      type: DataTypes.STRING
    },
    descripcion: {
      type: DataTypes.STRING,
    },
    precio: {
      type: DataTypes.INTEGER,
    },
    cantidad: {
      type: DataTypes.INTEGER,
    },
    imagen: {
      type: DataTypes.STRING,
    },
  })

  return Producto

}