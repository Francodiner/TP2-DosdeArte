const reservar = (req, res) => {
    const { precio } = req.body

    if(precio === 100){
        return res.status(200).send("Su reserva se ha realizado con exito")
    }else{
        return res.status(402).send('No te alcanza la plata para hacer la reserva.')
    }


}

module.exports = {
	reservar
};
