const { internalServerError } = require("../config/httpcodes");

module.exports = (err, req, res) => {
	console.error(err.stack);
	res.status(err.status || internalServerError).render("error", {
		error: err.message || "Error interno del servidor",
		status: err.status || internalServerError
	});
};
