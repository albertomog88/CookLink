--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE usuarios (
  id int AUTO_INCREMENT PRIMARY KEY,
  username varchar(50) NOT NULL UNIQUE CHECK (REPLACE(username, " ", "") != ""),
  password varchar(255) NOT NULL CHECK (REPLACE(password, " ", "") != "")
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla usuarios
--

INSERT INTO usuarios (id, username, password) VALUES
(1, 'usuario1', 'contraseña123'),
(2, 'juan_perez', 'segura456'),
(3, 'maria_garcia', 'clave789'),
(4, 'carlos_lopez', 'secreto321'),
(5, 'ana_martinez', 'pass1234'),
(6, 'pedro_rodriguez', 'clave5678'),
(7, 'laura_sanchez', 'segura9012'),
(8, 'miguel_fernandez', 'contraseña3456'),
(9, 'sofia_torres', 'clave7890'),
(10, 'david_ruiz', 'secreto1234'),
(11, 'alberto', '1234');
