const db = require('../models');
const { productoByNombreFinder } = require('../services/productoByNombreFinder');
const { actividadByIdClienteFinder } = require('../services/actividadByIdClienteFinder')
const { clienteByEmailFinder } = require('../services/clienteByEmailFinder')
const ActividadAlquileresModel = db.actividad_alquileres

function sumarDias(fecha, dias){
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }


const registrarActividadAlquiler = async (req, res) => {
    const {
        cantidad,
        fecha_inicio,
        fecha_fin,
        producto_nombre,
        cliente_email
    } = req.body


    try {
        const Producto = await productoByNombreFinder(producto_nombre, res)
        const Cliente = await clienteByEmailFinder(cliente_email, res)
        
        console.log(req.body);

        const actividadAlquiler = await ActividadAlquileresModel.create({
            cantidad: cantidad,
            fecha_inicio: fecha_inicio,
            fecha_fin: fecha_fin,
            fecha_devolucion: fecha_fin,
            producto_id: Producto.id,
            cliente_id: Cliente.id,
            estado_id: 1
        });
        res.status(201).send({
            mensaje: "La actividad ah sido creada y guardada.",
            actividadAlquiler: actividadAlquiler
        });
    } catch (e) {
        return res.status(422).send(e);
    }
}

const editarActividadAlquiler = async (req, res) => {
    const {
        cantidad,
        fecha_inicio,
        fecha_fin,
        producto_nombre,
        cliente_email
    } = req.body

    try {

        const findCliente = await clienteByEmailFinder( cliente_email, res)
        var cliente_id = findCliente.id
        const findActividad = await actividadByIdClienteFinder(cliente_id, res)
        const Producto = await productoByNombreFinder(producto_nombre, res)
        
    
        const actividadAlquiler = await findActividad.update({
            cantidad: cantidad,
            fecha_inicio: fecha_inicio,
            fecha_fin: fecha_fin,
            fecha_devolucion: fecha_fin,
            producto_id: Producto.id,
            cliente_id: findCliente.id,
            estado_id: 1
        });

        res.status(201).send({
            mensaje: "La actividad ha sido editada y guardada.",
            actividadAlquiler: actividadAlquiler
        });
    } catch (e) {
        return res.status(422).send(e);
    }
    
   
}



const eliminarActividadAlquiler = async (req, res) => {
    const {
        email
    } = req.params
    

    try {

        const findCliente = await clienteByEmailFinder(email, res)
        var cliente_id = findCliente.id
        const findActividad = await actividadByIdClienteFinder(cliente_id, res)

        await findActividad.destroy()
        
        res.status(201).send({
            mensaje: "La actividad ha sido eliminada.",
            findActividad: findActividad
        });
    } catch (e) {
        console.log(e)
        return res.status(422).send(e);
    }
}

const obtenerActividad = async (req, res) => {
    const {
        email
    } = req.params

    try {
        
        const findCliente = await clienteByEmailFinder(email, res)
        var cliente_id = findCliente.id
        const findActividad = await actividadByIdClienteFinder(cliente_id, res)

        res.status(201).send({
            actividad: findActividad
        });
    } catch (e) {
        return res.status(422).send(e);
    }
}

module.exports = {
    registrarActividadAlquiler,
    eliminarActividadAlquiler,
    editarActividadAlquiler,
    obtenerActividad

};