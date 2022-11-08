-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.30 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando estructura para tabla dosdearte_local.actividad_alquileres
CREATE TABLE IF NOT EXISTS `actividad_alquileres` (
  `id` int NOT NULL AUTO_INCREMENT,
  `producto_id` int NOT NULL,
  `cliente_id` int NOT NULL,
  `cantidad` int NOT NULL,
  `estado_id` int NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL,
  `fecha_devolucion` date DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_reserva_clientes_productos` (`producto_id`),
  KEY `FK_reserva_clientes_clientes` (`cliente_id`),
  KEY `FK_reserva_clientes_estados` (`estado_id`),
  CONSTRAINT `FK_reserva_clientes_clientes` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_reserva_clientes_estados` FOREIGN KEY (`estado_id`) REFERENCES `estado_actividades` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_reserva_clientes_productos` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla dosdearte_local.actividad_alquileres: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `actividad_alquileres` DISABLE KEYS */;
/*!40000 ALTER TABLE `actividad_alquileres` ENABLE KEYS */;

-- Volcando estructura para tabla dosdearte_local.clientes
CREATE TABLE IF NOT EXISTS `clientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `nro_documento` varchar(50) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla dosdearte_local.clientes: ~5 rows (aproximadamente)
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` (`id`, `nombre`, `apellido`, `nro_documento`, `telefono`, `email`, `direccion`, `createdAt`, `updatedAt`) VALUES
	(1, 'Dardo', 'Helu', '123123', '123123', 'dardo@gmail.com', 'calle falsa 123', '2022-11-08 14:58:54', '2022-11-08 14:58:54'),
	(2, 'Franco', 'Diner', '456789', '456789', 'franco@gmail.com', 'calle falsa 456', '2022-11-08 15:00:54', '2022-11-08 15:00:54');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;

-- Volcando estructura para tabla dosdearte_local.estado_actividades
CREATE TABLE IF NOT EXISTS `estado_actividades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla dosdearte_local.estado_actividades: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `estado_actividades` DISABLE KEYS */;
INSERT INTO `estado_actividades` (`id`, `nombre`, `createdAt`, `updatedAt`) VALUES
	(1, 'Reservado', '2022-11-08 12:27:53', '2022-11-08 12:27:53'),
	(2, 'Alquilado', '2022-11-08 12:27:52', '2022-11-08 12:27:53'),
	(3, 'Caido', '2022-11-08 12:27:55', '2022-11-08 12:27:54'),
	(4, 'No disponible', '2022-11-08 12:27:55', '2022-11-08 12:27:54');
/*!40000 ALTER TABLE `estado_actividades` ENABLE KEYS */;

-- Volcando estructura para tabla dosdearte_local.estado_productos
CREATE TABLE IF NOT EXISTS `estado_productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla dosdearte_local.estado_productos: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `estado_productos` DISABLE KEYS */;
INSERT INTO `estado_productos` (`id`, `nombre`, `createdAt`, `updatedAt`) VALUES
	(1, 'Optimo', '2022-11-08 12:27:44', '2022-11-08 12:27:44'),
	(2, 'Roto', '2022-11-08 12:27:45', '2022-11-08 12:27:45'),
	(3, 'En reparacion', '2022-11-08 12:27:45', '2022-11-08 12:27:46');
/*!40000 ALTER TABLE `estado_productos` ENABLE KEYS */;

-- Volcando estructura para tabla dosdearte_local.productos
CREATE TABLE IF NOT EXISTS `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `precio` int NOT NULL,
  `cantidad` int NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `tipo_id` int DEFAULT NULL,
  `estado_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_productos_tipo_productos` (`tipo_id`),
  KEY `FK_productos_estado_productos` (`estado_id`),
  CONSTRAINT `FK_productos_estado_productos` FOREIGN KEY (`estado_id`) REFERENCES `estado_productos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_productos_tipo_productos` FOREIGN KEY (`tipo_id`) REFERENCES `tipo_productos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla dosdearte_local.productos: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `precio`, `cantidad`, `imagen`, `tipo_id`, `estado_id`, `createdAt`, `updatedAt`) VALUES
	(1, 'Renata', 'Altura regulable', 100, 2, 'lampara_renata.jpg', 2, 1, '2022-11-08 12:27:15', '2022-11-08 12:27:16');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;

-- Volcando estructura para tabla dosdearte_local.tipo_productos
CREATE TABLE IF NOT EXISTS `tipo_productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla dosdearte_local.tipo_productos: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `tipo_productos` DISABLE KEYS */;
INSERT INTO `tipo_productos` (`id`, `nombre`, `createdAt`, `updatedAt`) VALUES
	(1, 'Escritorio', '2022-11-08 12:27:04', '2022-11-08 12:27:05'),
	(2, 'De pie', '2022-11-08 12:27:06', '2022-11-08 12:27:06'),
	(3, 'Aplique', '2022-11-08 12:27:07', '2022-11-08 12:27:07'),
	(4, 'Colgable', '2022-11-08 12:27:09', '2022-11-08 12:27:08');
/*!40000 ALTER TABLE `tipo_productos` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
