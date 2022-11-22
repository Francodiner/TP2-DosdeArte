const express = require("express");
const router = express();
const { check } = require("express-validator");
const clientes = require("../controllers/clientes");
const productos = require("../controllers/productos");
const actividadAlquileres = require("../controllers/actividad_alquileres");

router.use(express.json());

/**
 * @openapi
 * /:
 *   post:
 *     description: Crear un cliente
 *     responses:
 *       200:
 *         description: Cliente creado
 *       422:
*          description: No se proceso la solicitud
 */

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

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get(
  "/clientes/:email",
  [check("email", "El email es requerido.").not().isEmpty()],
  clientes.obtenerCliente
);

/**
* @openapi
* /clientes/{email}:
*   get:
*     description: obtiene un cliente por email
*     responses:
*       201:
*         Ok
*       422:
*         description: No se proceso la solicitud
* 
*         
*/    
router.get('/clientes/:email',
 [
     check('email', 'El email es requerido.').not().isEmpty(),
 ],
 clientes.obtenerCliente)

/**
* @openapi
* /clientes:
*   put:
*     description: Edita un cliente
*     responses:
*       201:
*         description: El cliente ha sido editado y guardado
*       422:
*         description: No se proceso la solicitud      
*/
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

/**
* @openapi
* /clientes/:email:
* 
*   delete:
*     description: Elimina un corredor buscandolo por email
*     responses:
*       201:
*         description: El cliente ha sido eliminado.
*       422:
*         description: No se proceso la solicitud
*         
*/    

router.delete('/clientes/:email',
 [
     check('email', 'El email es requerido.').not().isEmpty(),
 ],
 clientes.eliminarCliente)


/**
* @openapi
* /productos:
*   post:
*     description: crea un corredor
*     responses:
*       201:
*         description: Ok.
*       422:
*         description: 
*         
*/

router.post('/productos',
 [
     check('nombre', 'El nombre es requerido.').not().isEmpty(),
     check('descripcion', 'La descripcion es requerida.').not().isEmpty(),
     check('precio', 'El precio es requerido, y solo debe contener numeros.').isNumeric().not().isEmpty(),
     check('cantidad', 'La cantidad es requerido, y solo debe contener numeros.').isNumeric().not().isEmpty().isInt(),
 ],
 productos.registrarProducto)

/**
* @openapi
* /productos/:nombre:
*   get:
*     description: obtiene un producto por nombre
*     responses:
*       201:
*         description: Ok.
*       404:
*         description: El producto no ha sido encontrado
*         
*/

router.get('/productos/:nombre',
 [
     check('nombre', 'El nombre es requerido.').not().isEmpty(),
 ],
 productos.obtenerProducto)

/**
* @openapi
* /productos:
*   put:
*     description: edita un producto buscandolo por nombre
*     responses:
*       201:
*         description: El producto ha sido editado.
*       404:
*         description: El producto no ha sido encontrado
*         
*/    


router.put('/productos',
 [
     check('nombre', 'El nombre es requerido.').not().isEmpty(),
     check('descripcion', 'La descripcion es requerida.').not().isEmpty(),
     check('precio', 'El precio es requerido, y solo debe contener numeros.').isNumeric().not().isEmpty(),
     check('cantidad', 'La cantidad es requerido, y solo debe contener numeros.').isNumeric().not().isEmpty().isInt(),
 ],
 productos.editarProducto)


/**
* @openapi
* /productos/:nombre:
*   delete:
*     description: edita un producto buscandolo por nombre
*     responses:
*       201:
*         description: El producto ha sido eliminado.
*       404:
*         description: El producto no ha sido encontrado
*         
*/    

router.delete('/productos/:nombre',
 [
     check('nombre', 'El nombre es requerido.').not().isEmpty(),
 ],
 productos.eliminarProducto)


 //ActividadAlquiler

/**
* @openapi
* /actividadAlquiler:
*   post:
*     description: Registra una actividad
*     responses:
*       201:
*         description: La actividad ha sido creada y guardada
*       422:
*         description: 
*         
*/    
router.post('/actividadAlquiler',
[
 check('cantidad', 'La cantidad es requerida.').not().isEmpty(),
 check('fecha_inicio', 'La fecha de inicio es requerida, y debe ser una fecha correcta.').isDate().not().isEmpty(),
 check('fecha_fin', 'La fecha de fin es requerida, y debe ser una fecha correcta.').isDate().not().isEmpty(),
],
actividadAlquileres.registrarActividadAlquiler)

/**
* @openapi
* /actividadAlquiler:
*   put:
*     description: Edita una actividad Alquiler buscandola por el mail del cliente asociado
*     responses:
*       201:
*         description: La actividad ha sido creada y guardada
*       422:
*         description: 
*         
*/  

router.put('/actividadAlquiler',
[
 check('cantidad', 'La cantidad es requerida.').not().isEmpty(),
 check('fecha_inicio', 'La fecha de inicio es requerida, y debe ser una fecha correcta.').isDate().not().isEmpty(),
 check('fecha_fin', 'La fecha de fin es requerida, y debe ser una fecha correcta.').isDate().not().isEmpty(),
],
actividadAlquileres.editarActividadAlquiler)

/**
* @openapi
* /actividadAlquiler/:email:
*   post:
*     description: Elimina una actividadAlquiler buscandola por el mail del cliente asociado
*     responses:
*       201:
*         description: La actividad ha sido eliminada
*       422:
*         description: 
*         
*/  


router.delete('/actividadAlquiler/:email',
[
 check('nombre', 'El nombre es requerido.').not().isEmpty(),
],
actividadAlquileres.eliminarActividadAlquiler)


 

module.exports = router;
