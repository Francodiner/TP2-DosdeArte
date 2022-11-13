'use strict';

const db = require('../models')
const TipoProductosModel = db.tipo_productos

const tipoProductoFetcher = async(tipo, response) => {

    const tipoProducto = await TipoProductosModel.findOne({where: {nombre: tipo}})

    if(!tipoProducto){
        response.status(404).send("El tipo del producto no ha sido encontrado.");
    }
    
    return tipoProducto
}

module.exports = {
    tipoProductoFetcher
}