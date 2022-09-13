const express = require('express');
const router = express();
const reservas = require('../controllers/reservas')

router.use(express.json());

//Rutas
router.get('/', (req, res) => {
    res.send('Bienvenidos')
})

router.post('/reservas/reservar', reservas.reservar)

module.exports = router;

