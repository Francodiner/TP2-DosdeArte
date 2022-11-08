module.exports = (sequelize, DataTypes) => {

  const Cliente = sequelize.define("clientes", {
    nombre: {
      type: DataTypes.STRING
    },
    apellido: {
      type: DataTypes.STRING,
    },
    nro_documento: {
      type: DataTypes.STRING,
    },
    telefono: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    direccion: {
      type: DataTypes.STRING,
    }
  })

  return Cliente

}