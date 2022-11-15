module.exports = (sequelize, DataTypes) => {

  const ActividadAlquiler = sequelize.define("actividad_alquileres", {
    cantidad: {
      type: DataTypes.INTEGER
    },
    fecha_inicio: {
      type: DataTypes.DATE,
    },
    fecha_fin: {
      type: DataTypes.DATE,
    },
    fecha_devolucion: {
      type: DataTypes.DATE,
    },
    producto_id : {
      type: DataTypes.INTEGER
    },
    cliente_id: {
      type: DataTypes.INTEGER
    }
  })

  return ActividadAlquiler

}