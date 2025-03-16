const { badRequest, conflict } = require("../config/httpcodes");
const AppError = require("../middlewares/AppError");
const User = require("../models/userModel");

const UserService = {
	getAllUsers: () => User.getAll(),
	registroUser: async user => {
		if (!user.username) throw new AppError("Falta el nombre de usuario", badRequest);
		if (!user.password) throw new AppError("Falta la contraseña", badRequest);
		if (!user.confirm_password) throw new AppError("Falta la contraseña", badRequest);
		if (/[\s\t]/.test(user.username)) throw new AppError("El nombre de usuario tiene espacios", badRequest);
		if (/[\s\t]/.test(user.password)) throw new AppError("La contraseña tiene espacios", badRequest);

		// Comprobamos si el usuario ya existe
		const usuarioExistente = await User.getByUsername(user.username);
		if (usuarioExistente) {
			console.log(`usuarioExistente: ${usuarioExistente.username}`);
			throw new AppError("El usuario ya existe", conflict);
		}

		return User.registro(user);
	},
	deleteUser: id => User.delete(id)
};

module.exports = UserService;
