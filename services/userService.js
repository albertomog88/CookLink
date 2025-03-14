// services/userService.js
const User = require('../models/userModel');

const UserService = {
    getAllUsers: async () => {
        return await User.getAll();
    },
    registroUser: async (user) => {
        if (!user) {
            const error = new Error('Sin dato');
            error.status = 400;
            throw error;
        }

        //1 Comprobamos si el usuario ya existe
        const usuarioExistente = await User.getByUsername(user.username);
        if (usuarioExistente) {
            console.log("usuarioExistente" + usuarioExistente);
            const error = new Error('El usuario ya existe');
            error.status = 409;
            throw error; // Aquí solo lanzamos el error
        }
        // Si no existe, procedemos con el registro
        return await User.registro(user);
    },
    deleteUser: async (id) => {
        return await User.delete(id);
    }
};

module.exports = UserService;