const express = require('express');
const router = express();
const {
    check
} = require("express-validator");
const clientes = require('../controllers/clientes');
const productos = require('../controllers/productos');
const actividadAlquileres = require('../controllers/actividad_alquileres');

router.use(express.json());

//Rutas

//Clientes
router.post('/clientes',
    [
        check('nombre', 'El nombre es requerido.').not().isEmpty(),
        check('apellido', 'El apellido es requerido.').not().isEmpty(),
        check('nro_documento', 'El numero de documento es requerido, y solo debe contener numeros.').isNumeric().not().isEmpty().isInt(),
        check('telefono', 'El numero de telefono es requerido, y solo debe contener numeros.').isNumeric().not().isEmpty().isInt(),
        check('email', 'El email es requerido.').not().isEmpty(),
        check('direccion', 'La direccion es requerida.').not().isEmpty(),
    ],
    clientes.registrarCliente)

router.get('/clientes/:email',
    [
        check('email', 'El email es requerido.').not().isEmpty(),
    ],
    clientes.obtenerCliente)

router.put('/clientes',
    [
        check('nombre', 'El nombre es requerido.').not().isEmpty(),
        check('apellido', 'El apellido es requerido.').not().isEmpty(),
        check('nro_documento', 'El numero de documento es requerido, y solo debe contener numeros.').isNumeric().not().isEmpty().isInt(),
        check('telefono', 'El numero de telefono es requerido, y solo debe contener numeros.').isNumeric().not().isEmpty().isInt(),
        check('email', 'El email es requerido.').not().isEmpty(),
        check('direccion', 'La direccion es requerida.').not().isEmpty(),
    ],
    clientes.editarCliente)

router.delete('/clientes/:email',
    [
        check('email', 'El email es requerido.').not().isEmpty(),
    ],
    clientes.eliminarCliente)

//Productos

router.post('/productos',
    [
        check('nombre', 'El nombre es requerido.').not().isEmpty(),
        check('descripcion', 'La descripcion es requerida.').not().isEmpty(),
        check('precio', 'El precio es requerido, y solo debe contener numeros.').isNumeric().not().isEmpty(),
        check('cantidad', 'La cantidad es requerido, y solo debe contener numeros.').isNumeric().not().isEmpty().isInt(),
    ],
    productos.registrarProducto)


router.get('/productos/:nombre',
    [
        check('nombre', 'El nombre es requerido.').not().isEmpty(),
    ],
    productos.obtenerProducto)


router.put('/productos',
    [
        check('nombre', 'El nombre es requerido.').not().isEmpty(),
        check('descripcion', 'La descripcion es requerida.').not().isEmpty(),
        check('precio', 'El precio es requerido, y solo debe contener numeros.').isNumeric().not().isEmpty(),
        check('cantidad', 'La cantidad es requerido, y solo debe contener numeros.').isNumeric().not().isEmpty().isInt(),
    ],
    productos.editarProducto)


router.delete('/productos/:nombre',
    [
        check('nombre', 'El nombre es requerido.').not().isEmpty(),
    ],
    productos.eliminarProducto)


    //ActividadAlquiler

router.post('/actividadAlquiler',
[
    check('cantidad', 'La cantidad es requerida.').not().isEmpty(),
    check('fecha_inicio', 'La fecha de inicio es requerida, y debe ser una fecha correcta.').isDate().not().isEmpty(),
    check('fecha_fin', 'La fecha de fin es requerida, y debe ser una fecha correcta.').isDate().not().isEmpty(),
],
actividadAlquileres.registrarActividadAlquiler)


router.put('/actividadAlquiler',
[
    check('cantidad', 'La cantidad es requerida.').not().isEmpty(),
    check('fecha_inicio', 'La fecha de inicio es requerida, y debe ser una fecha correcta.').isDate().not().isEmpty(),
    check('fecha_fin', 'La fecha de fin es requerida, y debe ser una fecha correcta.').isDate().not().isEmpty(),
],
actividadAlquileres.editarActividadAlquiler)


router.delete('/actividadAlquiler/:email',
[
    check('nombre', 'El nombre es requerido.').not().isEmpty(),
],
actividadAlquileres.eliminarActividadAlquiler)

module.exports = router;