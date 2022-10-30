'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class actividad_alquileres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        actividad_alquileres.belongsTo(models.productos, {
            foreignKey: 'producto_id',
            as: 'producto_id',
        });
        actividad_alquileres.belongsTo(models.clientes, {
            foreignKey: 'cliente_id',
            as: 'cliente_id',
        });
        actividad_alquileres.belongsTo(models.estado_actividades, {
            foreignKey: 'estado_id',
            as: 'estado_id',
        });
    }
  };
  actividad_alquileres.init({
    cantidad: DataTypes.INTEGER,
    fecha_inicio: DataTypes.DATE,
    fecha_fin: DataTypes.DATE,
    fecha_devolucion: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'actividad_alquileres',
  });
  return actividad_alquileres;
};