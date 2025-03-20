--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE usuarios;
CREATE TABLE usuarios (
  id int AUTO_INCREMENT PRIMARY KEY,
  username varchar(50) NOT NULL UNIQUE CHECK (TRIM(username) != "" AND username NOT LIKE "% %"),
  password varchar(255) NOT NULL CHECK (TRIM(password) != "" AND password NOT LIKE "% %")
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE recetas (
  id int AUTO_INCREMENT PRIMARY KEY,
  nombre varchar(255) NOT NULL UNIQUE,
  descripcion TEXT
);

INSERT INTO recetas (nombre, descripcion) VALUES
  ('Pizza Margherita', 'Deliciosa pizza con tomate, mozzarella y albahaca.'),
  ('Spaghetti Carbonara', 'Pasta con huevo, queso, panceta y pimienta negra.'),
  ('Ensalada César', 'Lechuga romana, crutones y aderezo César.'),
  ('Tacos al Pastor', 'Tortilla con cerdo marinado y piña.'),
  ('Sushi Roll', 'Arroz, alga nori y pescado fresco en rollo.'),
  ('Hamburguesa Clásica', 'Carne de res, lechuga, tomate y pan brioche.'),
  ('Lasagna Boloñesa', 'Capas de pasta con salsa boloñesa y bechamel.'),
  ('Ceviche de Camarón', 'Camarones marinados en limón con cebolla y cilantro.'),
  ('Ratatouille', 'Guiso de verduras con berenjena, calabacín y tomate.'),
  ('Churrasco Argentino', 'Carne asada con chimichurri.');
