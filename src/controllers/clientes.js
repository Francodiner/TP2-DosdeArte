const db = require('../models')
const ClientesModel = db.clientes

const registrarCliente = async (req, res) => {
    const {
        nombre,
        apellido,
        nro_documento,
        telefono,
        email,
        direccion
    } = req.body

    try {
        const cliente = await ClientesModel.create({
            nombre: nombre,
            apellido: apellido,
            nro_documento: nro_documento,
            telefono: telefono,
            email: email,
            direccion: direccion
        });
        res.status(201).send({
            cliente: cliente
        });
    } catch (e) {
        console.log(e)
        return res.status(422).send(e);
    }
}

const editarCliente = async (req, res) => {
    const {
        email
    } = req.body
    
    try {
        
        res.status(201).send({
            cliente: cliente
        });
    } catch (e) {
        console.log(e)
        return res.status(422).send(e);
    }
}

const obtenerCliente = async (req, res) => {
    const {
        email
    } = req.body
    
    try {
        
        res.status(201).send({
            cliente: cliente
        });
    } catch (e) {
        console.log(e)
        return res.status(422).send(e);
    }
}

const eliminarCliente = async (req, res) => {
    const {
        email
    } = req.body
    
    try {
        
        res.status(201).send({
            cliente: cliente
        });
    } catch (e) {
        console.log(e)
        return res.status(422).send(e);
    }
}

module.exports = {
    registrarCliente,
    eliminarCliente,
    obtenerCliente,
    editarCliente
};