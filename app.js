const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const app = express();
const swaggerUi = require('swagger-ui-express');
const appStatus = require('./src/routes/routes');


app.use('/', appStatus);
// const swaggerDocument = require('./swagger.json');



const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Dos De Arte',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes/routes.js'], // files containing annotations as above
};
const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); 



//Servidor corriendo y escuchando
app.listen(3000, () => {
    console.log('Servidor web escuchando en el puerto 3000');
});

