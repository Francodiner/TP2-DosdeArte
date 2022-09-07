const express = require('express');
const router = express();
const reservas = require('../controllers/reservas')

//Rutas
router.get('/', (req, res) => {
    res.send('Bienvenidos')
})

router.get('/reservar', reservas.reservar)

module.exports = router;

