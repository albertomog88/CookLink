const UserService = require("../services/userService");
const { validationResult } = require("express-validator");
const { renderView } = require("../middlewares/viewHelper"); // Importamos la función centralizada
const { ok, badRequest, conflict, internalServerError } = require("../config/httpcodes");

exports.getAllUsers = async (req, res, next) => {
	try {
		const users = await UserService.getAllUsers();
		res.render("users", { users });
	}
	catch (err) {
		next(err);
	}
};

exports.createUser = async (req, res, next) => {
	try {
		const { name } = req.body;
		await UserService.createUser(name);
		res.redirect("/users");
	}
	catch (err) {
		next(err);

	}
};

// Redireccion a la pagina de registro
exports.toRegistro = (req, res, next) => {
	try {
		renderView(res, "registro", ok);
	}
	catch (err) {
		next(err);
	}
};

exports.registroUser = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		console.log("Error details: ", JSON.stringify(errors.array(), null));
		return renderView(res, "registro", badRequest, {mensajeError: errors.array()});
	}

	try {
		console.log(req.body);

		await UserService.registroUser(req.body);
		renderView(res, "registro", ok, { mensajeExito: "Usuario registrado correctamente." });

	}
	catch (err) {
		console.error("Error al crear usuario:", err.message);
		if (err.message === "El usuario ya existe") {
			console.log("Error details2: ", JSON.stringify(errors.array(), null));
			errors.errors.push({ msg: err.message });
			return renderView(res, "registro", conflict, {
				mensajeError: errors.array()
				// Enviar un array con el mensaje de error
			});
		}

		renderView(res, "registro", internalServerError, { mensajeError: [ err.message ] });
	}
};

exports.deleteUser = async (req, res, next) => {
	try {
		const { id } = req.params;
		await UserService.deleteUser(id);
		res.status(ok).json({ message: "Usuario eliminado correctamente" });
	}
	catch (err) {
		next(err);
	}
};
