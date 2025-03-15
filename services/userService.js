const { badRequest, conflict } = require("../config/httpcodes");
const User = require("../models/userModel");

const UserService = {
	getAllUsers: () => User.getAll(),
	registroUser: async user => {
		if (!user.username) {
			const error = new Error("Falta el nombre de usuario");
			error.status = badRequest;
			throw error;
		}

		if (!user.password) {
			const error = new Error("Falta la contraseña");
			error.status = badRequest;
			throw error;
		}

		if (!user.confirm_password) {
			const error = new Error("Falta la contraseña");
			error.status = badRequest;
			throw error;
		}

		// Comprobamos si el usuario ya existe
		const usuarioExistente = await User.getByUsername(user.username);
		if (usuarioExistente) {
			console.log(`usuarioExistente: ${usuarioExistente.username}`);
			const error = new Error("El usuario ya existe");
			error.status = conflict;
			throw error;
		}

		return User.registro(user);
	},
	deleteUser: id => User.delete(id)
};

module.exports = UserService;
