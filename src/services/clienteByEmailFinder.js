'use strict';

const db = require('../models')
const ClientesModel = db.clientes

const clienteByEmailFinder = async(email, response) => {

    const cliente = await ClientesModel.findOne({where: {email: email}})

    if(!cliente){
        response.status(404).send("El email no ha sido encontrado.");
    }
    
    return cliente

}

module.exports = {
    clienteByEmailFinder
}