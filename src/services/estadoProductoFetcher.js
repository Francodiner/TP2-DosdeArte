'use strict';

const db = require('../models')
const EstadoProductosModel = db.estado_productos

const estadoProductoFetcher = async(estado, response) => {

    const estadoProducto = await EstadoProductosModel.findOne({where: {nombre: estado}})

    if(!estadoProducto){
        response.status(404).send("El estado del producto no ha sido encontrado.");
    }
    
    return estadoProducto
}

module.exports = {
    estadoProductoFetcher
}