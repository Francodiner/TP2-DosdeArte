'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class estado_productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  estado_productos.init({
    nombre: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'estado_productos',
  });
  return estado_productos;
};