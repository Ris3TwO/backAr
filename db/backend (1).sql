-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-07-2019 a las 23:21:23
-- Versión del servidor: 10.3.16-MariaDB
-- Versión de PHP: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `backend`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorys`
--

CREATE TABLE `categorys` (
  `id` int(11) NOT NULL,
  `category` varchar(20) NOT NULL,
  `client_id` int(11) NOT NULL,
  `path_image` varchar(100) NOT NULL,
  `description` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categorys`
--

INSERT INTO `categorys` (`id`, `category`, `client_id`, `path_image`, `description`) VALUES
(1, 'Olecranon', 1, '/resources/1/category/images/olecra.png', 'Olevranon category');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `domain`
--

CREATE TABLE `domain` (
  `client_id` int(11) DEFAULT NULL,
  `id` blob DEFAULT NULL,
  `domain` text DEFAULT NULL,
  `creation_timestamp` text DEFAULT NULL,
  `whois_user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `media`
--

CREATE TABLE `media` (
  `client_id` int(11) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `process_id` text DEFAULT NULL,
  `name` text DEFAULT NULL,
  `local` text DEFAULT NULL,
  `domain` int(11) DEFAULT NULL,
  `path_data` text DEFAULT NULL,
  `is_path_ico` text DEFAULT NULL,
  `path_ico` text DEFAULT NULL,
  `category` int(11) DEFAULT NULL,
  `media_type_id` int(11) DEFAULT NULL,
  `metadata` text DEFAULT NULL,
  `creation_timestamp` text DEFAULT current_timestamp(),
  `whois_user` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `media`
--

INSERT INTO `media` (`client_id`, `id`, `process_id`, `name`, `local`, `domain`, `path_data`, `is_path_ico`, `path_ico`, `category`, `media_type_id`, `metadata`, `creation_timestamp`, `whois_user`) VALUES
(1, 1, '45678', 'ISO 9001', '1', 0, 'resource/cert/iso9001.pdf', '1', '/data/resource/pdf/iso9001.png', 0, 1, '', '2019-04-16 23:06:24', ''),
(1, 2, '45788', 'TIBIA II', '1', 0, 'resource/cert/tibiaii.fbx', '0', '', 1, 2, '', '2019-04-16 23:16:24', ''),
(3, 3, '121312', 'video1.mp4', '0', 1, 'resources/3/video1.mp4', 'asa', 'asdad', 0, 4, 'Video de perrito', NULL, NULL),
(3, 4, '121312', 'video1.mp4', '0', 1, 'resources/3/video1.mp4', 'asa', 'asdad', 0, 4, 'Video de perrito', NULL, NULL),
(3, 7, '121312', 'video1.mp4', '0', 1, 'resources/3/video1.mp4', 'asa', 'asdad', 0, 4, 'Video de perrito', '2019-07-08 08:48:51', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `media_type`
--

CREATE TABLE `media_type` (
  `media_type_id` int(11) DEFAULT NULL,
  `value` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `media_type`
--

INSERT INTO `media_type` (`media_type_id`, `value`) VALUES
(1, 'Video');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `microusers`
--

CREATE TABLE `microusers` (
  `id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `user` varchar(10) NOT NULL,
  `access_level` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `creation_date` int(11) NOT NULL DEFAULT current_timestamp(),
  `username` varchar(20) NOT NULL,
  `whois_user` varchar(20) NOT NULL,
  `password` int(10) NOT NULL,
  `enabled` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `microusers`
--

INSERT INTO `microusers` (`id`, `client_id`, `user`, `access_level`, `creation_date`, `username`, `whois_user`, `password`, `enabled`) VALUES
(8, 3, 'enfralyss@', '0,1,2', 2147483647, 'Enfranly ', '', 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `client_id` int(11) NOT NULL,
  `user` text NOT NULL,
  `password` text DEFAULT NULL,
  `enabled` text DEFAULT NULL,
  `creation_timestamp` text DEFAULT current_timestamp(),
  `whois_user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`client_id`, `user`, `password`, `enabled`, `creation_timestamp`, `whois_user`) VALUES
(3, 'enfralyss@gmail.com', 'Canaima24', '1', '2019-07-02 10:02:30', 1),
(5, 'enfranly@gmail.com', '1234', 'true', 'current_timestamp()', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorys`
--
ALTER TABLE `categorys`
  ADD UNIQUE KEY `Unico` (`id`);

--
-- Indices de la tabla `media`
--
ALTER TABLE `media`
  ADD UNIQUE KEY `id` (`id`);

--
----------- Indices de la tabla `microusers`
--
ALTER TABLE `microusers`
  ADD UNIQUE KEY `id` (`id`);

--
----------- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user`(20)),
  ADD UNIQUE KEY `client_id` (`client_id`);

--
-------- AUTO_INCREMENT de las tablas volcadas
--

--
-------- AUTO_INCREMENT de la tabla `categorys`
--
ALTER TABLE `categorys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `media`
--
ALTER TABLE `media`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `microusers`
--
ALTER TABLE `microusers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `client_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
