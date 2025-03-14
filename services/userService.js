const User = require("../models/userModel");

const UserService = {
	getAllUsers: () => User.getAll(),
	registroUser: async user => {
		if (!user) {
			const error = new Error("Sin dato");
			error.status = 400;
			throw error;
		}

		// Comprobamos si el usuario ya existe
		const usuarioExistente = await User.getByUsername(user.username);
		if (usuarioExistente) {
			console.log(`usuarioExistente: ${usuarioExistente.username}`);
			const error = new Error("El usuario ya existe");
			error.status = 409;
			throw error; // Aquí solo lanzamos el error
		}
		// Si no existe, procedemos con el registro
		return User.registro(user);
	},
	deleteUser: id => User.delete(id)
};

module.exports = UserService;
