module.exports = (sequelize, DataTypes) => {

  const EstadoActividad = sequelize.define("estado_actividades", {
    nombre: {
      type: DataTypes.STRING
    },
  })

  return EstadoActividad
}