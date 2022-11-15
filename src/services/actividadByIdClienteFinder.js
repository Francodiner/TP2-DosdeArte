'use strict';

const db = require('../models')
const ActividadAlquilerModel = db.actividad_alquileres

const actividadByIdClienteFinder = async(cliente_id, response) => {

    const actividadAlquiler = await ActividadAlquilerModel.findOne({where: {cliente_id: cliente_id}})

    if(!actividadAlquiler){
        response.status(404).send("La actividad no ha sido encontrada.");
    }
    
    return actividadAlquiler

}

module.exports = {
    actividadByIdClienteFinder
}