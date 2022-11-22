const db = require('../models')
const ClientesModel = db.clientes
const {clienteByEmailFinder} = require('../services/clienteByEmailFinder')

const registrarCliente = async (req, res) => {
    const {
        nombre,
        apellido,
        nro_documento,
        telefono,
        email,
        direccion
    } = req.body
    console.log(req.params)

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
            mensaje: "El cliente ha sido creado y guardado.",
            cliente: cliente
        });
    } catch (e) {
        return res.status(422).send(e);
    }
}

const editarCliente = async (req, res) => {
    const {
        nombre,
        apellido,
        nro_documento,
        telefono,
        email,
        direccion
    } = req.body

    try {

        const findCliente = await clienteByEmailFinder(email, res)
    
        const cliente = await findCliente.update({
            nombre: nombre,
            apellido: apellido,
            nro_documento: nro_documento,
            telefono: telefono,
            direccion: direccion
        });

        res.status(201).send({
            mensaje: "El cliente ha sido editado y guardado.",
            cliente: cliente
        });
    } catch (e) {
        return res.status(422).send(e);
    }
}

const obtenerCliente = async (req, res) => {
    const {
        email
    } = req.params

    try {
        
        const cliente = await clienteByEmailFinder(email, res)

        res.status(201).send({
            cliente: cliente
        });
    } catch (e) {
        return res.status(422).send(e);
    }
}

const eliminarCliente = async (req, res) => {
    const {
        email
    } = req.params
    
    try {

        const cliente = await clienteByEmailFinder(email, res)

        await cliente.destroy()
        
        res.status(201).send({
            mensaje: "El cliente ha sido eliminado.",
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