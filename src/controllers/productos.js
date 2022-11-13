const db = require('../models')
const ProductoModel = db.productos
const {productoByNombreFinder} = require('../services/productoByNombreFinder')
const {estadoProductoFetcher} = require('../services/estadoProductoFetcher')
const {tipoProductoFetcher} = require('../services/tipoProductoFetcher')

const registrarProducto = async (req, res) => {
    const {
        nombre,
        descripcion,
        precio,
        cantidad,
        imagen,
        tipo,
        estado
    } = req.body

    try {

        const tipoProducto = await tipoProductoFetcher(tipo, res)

        const estadoProducto = await estadoProductoFetcher(estado, res)

        const producto = await ProductoModel.create({
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            cantidad: cantidad,
            imagen: imagen,
            tipo_id: tipoProducto.id,
            estado_id: estadoProducto.id
        });
        res.status(201).send({
            producto: producto
        });
    } catch (e) {
        return res.status(422).send(e);
    }

}

const editarProducto = async (req, res) => {
    const {
        nombre,
        descripcion,
        precio,
        cantidad,
        imagen,
        tipo,
        estado
    } = req.body

    try {

        const tipoProducto = await tipoProductoFetcher(tipo, res)

        const estadoProducto = await estadoProductoFetcher(estado, res)

        const findProducto = await productoByNombreFinder(nombre, res)

        const producto = await findProducto.update({
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            cantidad: cantidad,
            imagen: imagen,
            tipo_id: tipoProducto.id,
            estado_id: estadoProducto.id
        });

        res.status(201).send({
            mensaje: "El producto ha sido editado y guardado.",
            producto: producto
        });
    } catch (e) {
        return res.status(422).send(e);
    }
}

const obtenerProducto = async (req, res) => {
    const {
        nombre
    } = req.params

    try {
        const producto = await productoByNombreFinder(nombre, res)

        res.status(201).send({
            producto: producto
        });
    } catch (e) {
        return res.status(422).send(e);
    }
}

const eliminarProducto = async (req, res) => {
    const {
        nombre
    } = req.params

    try {
        const producto = await productoByNombreFinder(nombre, res)

        await producto.destroy()

        res.status(201).send({
            mensaje: "El producto ha sido eliminado.",
            producto: producto
        });
    } catch (e) {
        return res.status(422).send(e);
    }
}

module.exports = {
    registrarProducto,
    obtenerProducto,
    eliminarProducto,
    editarProducto
};