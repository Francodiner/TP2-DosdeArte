const app = require('./src/routes/routes')
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Hello World',
        version: '1.0.0',
      },
    },
    apis: ['./src/routes/routes'], // files containing annotations as above
  };
  
  const openapiSpecification = swaggerJsdoc(options);
//Servidor corriendo y escuchando
app.listen(3000, () => {
    console.log('Servidor web escuchando en el puerto 3000');
});

