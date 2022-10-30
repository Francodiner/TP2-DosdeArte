'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        productos.belongsTo(models.tipo_productos, {
            foreignKey: 'tipo_id',
            as: 'tipo_id',
        });
        productos.belongsTo(models.estado_productos, {
            foreignKey: 'estado_id',
            as: 'estado_id',
        });
    }
  };
  productos.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    imagen: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'productos',
  });
  return productos;
};