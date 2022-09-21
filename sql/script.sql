-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         5.7.33 - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando estructura para tabla tp2-dosdearte.actividad_alquileres
CREATE TABLE IF NOT EXISTS `actividad_alquileres` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `producto_id` int(11) NOT NULL,
  `cliente_id` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `estado_id` int(11) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL,
  `fecha_devolucion` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_reserva_clientes_productos` (`producto_id`),
  KEY `FK_reserva_clientes_clientes` (`cliente_id`),
  KEY `FK_reserva_clientes_estados` (`estado_id`),
  CONSTRAINT `FK_reserva_clientes_clientes` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_reserva_clientes_estados` FOREIGN KEY (`estado_id`) REFERENCES `estado_actividades` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_reserva_clientes_productos` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla tp2-dosdearte.actividad_alquileres: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `actividad_alquileres` DISABLE KEYS */;
INSERT INTO `actividad_alquileres` (`id`, `producto_id`, `cliente_id`, `cantidad`, `estado_id`, `fecha_inicio`, `fecha_fin`, `fecha_devolucion`) VALUES
	(1, 1, 1, 1, 2, '2022-09-20', '2023-09-20', NULL);
/*!40000 ALTER TABLE `actividad_alquileres` ENABLE KEYS */;

-- Volcando estructura para tabla tp2-dosdearte.clientes
CREATE TABLE IF NOT EXISTS `clientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `nro_documento` varchar(50) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla tp2-dosdearte.clientes: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` (`id`, `nombre`, `apellido`, `nro_documento`, `telefono`, `email`, `direccion`) VALUES
	(1, 'Franco', 'Diner', '42494061', '1131335938', 'dinerfranco@gmail.com', 'esnaola 2636'),
	(2, 'Sebastian', 'Matini', '12312312', '1232131237', 'seba@gmail.com', 'calle 123'),
	(3, 'Dardo', 'Helu', '32132131', '3231232136', 'dardo@gmail.com', 'beccar 321'),
	(4, 'Ema', 'Caputo', '56654354', '3125453457', 'ema@gmail.com', 'san martin 543'),
	(5, 'Pancho', 'Vlcek', '54676756', '5435435457', 'pancho@gmail.com', 'seguro 545');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;

-- Volcando estructura para tabla tp2-dosdearte.estado_actividades
CREATE TABLE IF NOT EXISTS `estado_actividades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla tp2-dosdearte.estado_actividades: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `estado_actividades` DISABLE KEYS */;
INSERT INTO `estado_actividades` (`id`, `nombre`) VALUES
	(1, 'Reservado'),
	(2, 'Alquilado'),
	(3, 'Caido'),
	(4, 'No disponible');
/*!40000 ALTER TABLE `estado_actividades` ENABLE KEYS */;

-- Volcando estructura para tabla tp2-dosdearte.estado_productos
CREATE TABLE IF NOT EXISTS `estado_productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla tp2-dosdearte.estado_productos: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `estado_productos` DISABLE KEYS */;
INSERT INTO `estado_productos` (`id`, `nombre`) VALUES
	(1, 'Optimo'),
	(2, 'Roto'),
	(3, 'En reparacion');
/*!40000 ALTER TABLE `estado_productos` ENABLE KEYS */;

-- Volcando estructura para tabla tp2-dosdearte.productos
CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `precio` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `tipo_id` int(11) DEFAULT NULL,
  `estado_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_productos_tipo_productos` (`tipo_id`),
  KEY `FK_productos_estado_productos` (`estado_id`),
  CONSTRAINT `FK_productos_estado_productos` FOREIGN KEY (`estado_id`) REFERENCES `estado_productos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_productos_tipo_productos` FOREIGN KEY (`tipo_id`) REFERENCES `tipo_productos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla tp2-dosdearte.productos: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `precio`, `cantidad`, `imagen`, `tipo_id`, `estado_id`) VALUES
	(1, 'Renata', 'Altura regulable', 100, 2, 'lampara_renata.jpg', 2, 1);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;

-- Volcando estructura para tabla tp2-dosdearte.tipo_productos
CREATE TABLE IF NOT EXISTS `tipo_productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla tp2-dosdearte.tipo_productos: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `tipo_productos` DISABLE KEYS */;
INSERT INTO `tipo_productos` (`id`, `nombre`) VALUES
	(1, 'Escritorio'),
	(2, 'De pie'),
	(3, 'Aplique'),
	(4, 'Colgable');
/*!40000 ALTER TABLE `tipo_productos` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
