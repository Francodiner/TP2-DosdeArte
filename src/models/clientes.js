'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  clientes.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    nro_documento: DataTypes.STRING,
    telefono: DataTypes.STRING,
    email: DataTypes.STRING,
    direccion: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'clientes',
  });
  return clientes;
};