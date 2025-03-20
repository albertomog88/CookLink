/**
 * Middleware para registrar en la consola las solicitudes HTTP recibidas.
 *
 * @param {Object} req - Objeto de solicitud HTTP que contiene la información de la petición.
 * @param {Object} res - Objeto de respuesta HTTP (no se usa en esta función).
 * @param {Function} next - Función que transfiere el control al siguiente middleware o ruta.
 */
const logRoutes = (req, res, next) => {
	console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
	next(); // Llama a next() para pasar al siguiente middleware o ruta
};

module.exports = logRoutes;
