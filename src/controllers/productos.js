const db = require('../models')
const ProductModel = db.productos

const registrarProducto = async (req, res) => {
    const {
        nombre,
        descripcion,
        precio,
        cantidad,
        imagen
    } = req.body

    try {
        const producto = await ProductModel.create({
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            cantidad: cantidad,
            imagen: imagen,
        });
        res.status(201).send({
            producto: producto
        });
    } catch (e) {
        console.log(e)
        return res.status(422).send(e);
    }

}

module.exports = {
    registrarProducto
};