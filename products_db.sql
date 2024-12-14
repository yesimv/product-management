-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-12-2024 a las 04:55:29
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
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `category` varchar(50) DEFAULT NULL,
  `stock` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `category`, `stock`) VALUES
(1, 'Manzana', 4.03, 'Frutas', 40),
(2, 'Plátanos', 9.46, 'Frutas', 50),
(3, 'Naranjas', 4.57, 'Frutas', 7),
(4, 'Leche Entera', 47.87, 'Lácteos', 17),
(5, 'Queso Panela', 88.04, 'Lácteos', 8),
(6, 'Huevos Blancos', 32.14, 'Huevos', 3),
(7, 'Pollo Entero', 80.49, 'Carnes', 20),
(8, 'Carne Molida', 44.89, 'Carnes', 7),
(9, 'Pan Integral', 18.35, 'Panadería', 37),
(10, 'Baguette', 15.76, 'Panadería', 37),
(11, 'Zanahorias', 10.39, 'Verduras', 25),
(12, 'Tomates', 16.82, 'Verduras', 25),
(13, 'Refresco Cola', 13.05, 'Bebidas', 6),
(14, 'Jugo de Naranja', 20.57, 'Bebidas', 39),
(15, 'Arroz', 12.78, 'Granos', 21),
(16, 'Frijoles', 19.55, 'Granos', 48),
(17, 'Aceite de Oliva', 134.70, 'Aceites', 20),
(18, 'Harina', 10.43, 'Granos', 34),
(19, 'Pasta Espagueti', 15.14, 'Pasta', 14),
(20, 'Azúcar', 14.39, 'Endulzantes', 15),
(21, 'Mantequilla', 43.09, 'Lácteos', 1),
(22, 'Café Molido', 66.67, 'Bebidas', 32),
(23, 'Té Verde', 37.04, 'Bebidas', 41),
(24, 'Atún Enlatado', 31.85, 'Conservas', 46),
(25, 'Sardinas', 20.75, 'Conservas', 48),
(26, 'Chocolates', 24.39, 'Dulces', 44),
(27, 'Galletas', 38.61, 'Dulces', 5),
(28, 'Papas Fritas', 22.46, 'Botanas', 43),
(29, 'Cereal', 37.15, 'Desayuno', 10),
(30, 'Helado', 84.38, 'Postres', 49),
(31, 'Jabón de Barra', 12.00, 'Aseo Personal', 38),
(32, 'Pasta Dental', 24.27, 'Aseo Personal', 30),
(33, 'Detergente', 89.12, 'Limpieza', 23),
(34, 'Suavizante', 62.66, 'Limpieza', 11),
(35, 'Cloro', 23.64, 'Limpieza', 47),
(36, 'Alcohol en Gel', 37.03, 'Aseo Personal', 32),
(37, 'Mascarilla Desechable', 10.56, 'Salud', 44),
(38, 'Papel Higiénico', 39.13, 'Limpieza', 31),
(39, 'Servilletas', 6.62, 'Limpieza', 37),
(40, 'Velas', 22.73, 'Hogar', 19),
(41, 'Fósforos', 9.25, 'Hogar', 22),
(42, 'Shampoo', 45.56, 'Aseo Personal', 43),
(43, 'Crema Corporal', 96.04, 'Aseo Personal', 10),
(44, 'Detergente para Trastes', 29.06, 'Limpieza', 45),
(45, 'Croquetas para Perros', 72.43, 'Mascotas', 22),
(46, 'Arena para Gatos', 61.50, 'Mascotas', 49),
(47, 'Juguete para Perros', 51.93, 'Mascotas', 37);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
