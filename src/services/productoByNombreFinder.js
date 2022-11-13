'use strict';

const db = require('../models')
const ProductoModel = db.productos

const productoByNombreFinder = async(nombre, response) => {

    const producto = await ProductoModel.findOne({where: {nombre: nombre}})

    if(!producto){
        response.status(404).send("El producto no ha sido encontrado.");
    }
    
    return producto

}

module.exports = {
    productoByNombreFinder
}