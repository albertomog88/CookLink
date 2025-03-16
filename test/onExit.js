require("dotenv").config();

const server = require("../app");
const db = require("../config/database");

/**
 * Maneja el evento "exit" del proceso para cerrar conexiones y el servidor correctamente al finalizar la aplicación.
 *
 * @returns {void} - Cierra la conexión a la base de datos y detiene el servidor cuando el proceso se cierra.
 */
process.on("exit", async () => {
	await db.end();
	server.close();
});
