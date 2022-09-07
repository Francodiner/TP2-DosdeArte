const app = require('./src/routes/routes')

//Servidor corriendo y escuchando
app.listen(3000, () => {
    console.log('Servidor web escuchando en el puerto 3000');
});