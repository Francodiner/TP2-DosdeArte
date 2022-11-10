const express = require('express');
const router = express();
const {
    check
} = require("express-validator");
const clientes = require('../controllers/clientes')

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

//Productos

module.exports = router;