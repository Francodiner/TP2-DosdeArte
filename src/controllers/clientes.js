const ClientesModel = require('../models/clientes');

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
        return res.status(422).send(e);
    }
}

module.exports = {
    registrarCliente
};