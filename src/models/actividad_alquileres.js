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
  })

  return ActividadAlquiler

}