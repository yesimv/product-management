-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-12-2024 a las 12:38:50
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `products_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) UNSIGNED NOT NULL,
  `category` enum('Frutas','Lácteos','Huevos','Carnes','Panadería','Verduras','Bebidas','Granos','Aceites','Pasta','Endulzantes','Conservas','Dulces','Botanas','Desayuno','Postres','Aseo Personal','Limpieza','Salud','Hogar','Mascotas') NOT NULL,
  `stock` int(11) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `category`, `stock`, `created_at`, `updated_at`) VALUES
(1, 'Pera', 5.10, 'Frutas', 20, '2024-12-14 08:52:39', '2024-12-14 08:52:39'),
(2, 'Uvas', 7.25, 'Frutas', 15, '2024-12-14 08:52:39', '2024-12-14 08:52:39'),
(3, 'Kiwi', 9.99, 'Frutas', 12, '2024-12-14 08:52:39', '2024-12-14 08:52:39'),
(4, 'Yogurt Natural', 25.50, 'Lácteos', 30, '2024-12-14 08:52:39', '2024-12-14 08:52:39'),
(5, 'Leche Condensada', 40.20, 'Lácteos', 25, '2024-12-14 08:52:39', '2024-12-14 08:52:39'),
(6, 'Mantequilla de Maní', 18.99, 'Lácteos', 10, '2024-12-14 08:52:39', '2024-12-14 08:52:39'),
(7, 'Salmón Fresco', 120.45, 'Carnes', 5, '2024-12-14 08:52:39', '2024-12-14 08:52:39'),
(8, 'Chuletas de Cerdo', 95.30, 'Carnes', 18, '2024-12-14 08:52:39', '2024-12-14 08:52:39'),
(9, 'Pan de Molde', 10.75, 'Panadería', 40, '2024-12-14 08:52:39', '2024-12-14 08:52:39'),
(10, 'Croissants', 20.30, 'Panadería', 35, '2024-12-14 08:52:39', '2024-12-14 08:52:39'),
(11, 'Cebollas', 8.50, 'Verduras', 22, '2024-12-14 08:52:39', '2024-12-14 08:52:39'),
(12, 'Lechuga', 7.90, 'Verduras', 28, '2024-12-14 08:52:39', '2024-12-14 08:52:39'),
(13, 'Cerveza', 25.30, 'Bebidas', 50, '2024-12-14 08:52:39', '2024-12-14 08:52:39'),
(14, 'Agua Mineral', 10.80, 'Bebidas', 60, '2024-12-14 08:52:39', '2024-12-14 08:52:39'),
(15, 'Quinoa', 35.00, 'Granos', 12, '2024-12-14 08:52:39', '2024-12-14 08:52:39'),
(16, 'Mijo', 27.45, 'Granos', 20, '2024-12-14 08:52:39', '2024-12-14 08:52:39'),
(17, 'Vinagre de Manzana', 15.25, 'Aceites', 40, '2024-12-14 08:52:39', '2024-12-14 08:52:39'),
(18, 'Aceite de Coco', 98.50, 'Aceites', 25, '2024-12-14 08:52:39', '2024-12-14 08:52:39'),
(19, 'Pasta Penne', 18.99, 'Pasta', 30, '2024-12-14 08:52:39', '2024-12-14 08:52:39'),
(20, 'Pasta Farfalle', 22.10, 'Pasta', 18, '2024-12-14 08:52:39', '2024-12-14 08:52:39'),
(21, 'Stevia', 25.99, 'Endulzantes', 50, '2024-12-14 08:52:39', '2024-12-14 08:52:39'),
(22, 'Miel', 32.45, 'Endulzantes', 40, '2024-12-14 08:52:39', '2024-12-14 08:52:39'),
(23, 'Conservas de Verduras', 15.80, 'Conservas', 30, '2024-12-14 08:52:39', '2024-12-14 08:52:39'),
(24, 'Mermelada de Fresa', 20.30, 'Conservas', 12, '2024-12-14 08:52:39', '2024-12-14 08:52:39'),
(25, 'Caramelos', 12.60, 'Dulces', 60, '2024-12-14 08:52:39', '2024-12-14 08:52:39'),
(26, 'Chicles', 8.99, 'Dulces', 45, '2024-12-14 08:52:39', '2024-12-14 08:52:39'),
(27, 'Papas Lays', 25.30, 'Botanas', 50, '2024-12-14 08:52:39', '2024-12-14 08:52:39'),
(28, 'Nachos', 30.25, 'Botanas', 40, '2024-12-14 08:52:39', '2024-12-14 08:52:39'),
(29, 'Cereal de Avena', 18.40, 'Desayuno', 22, '2024-12-14 08:52:39', '2024-12-14 08:52:39'),
(30, 'Granola', 23.50, 'Desayuno', 25, '2024-12-14 08:52:39', '2024-12-14 08:52:39'),
(31, 'pio', 0.00, 'Huevos', 9, '2024-12-14 10:18:30', '2024-12-14 10:18:30'),
(32, 'pio', 0.00, 'Huevos', 0, '2024-12-14 10:19:08', '2024-12-14 10:19:08'),
(34, 'hola producto', 1.00, 'Frutas', 1, '2024-12-14 10:49:06', '2024-12-14 10:49:06');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
