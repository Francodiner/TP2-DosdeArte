'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipo_productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  tipo_productos.init({
    nombre: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'tipo_productos',
  });
  return tipo_productos;
};