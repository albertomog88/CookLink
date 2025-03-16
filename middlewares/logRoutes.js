const logRoutes = (req, res, next) => {
	console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
	next(); // Llama a next() para pasar al siguiente middleware o ruta
};

module.exports = logRoutes;
