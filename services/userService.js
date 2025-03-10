// services/userService.js
const User = require('../models/userModel');

const UserService = {
    getAllUsers: async () => {
        return await User.getAll();
    },
    createUser: async (name) => {
        if (!name) {
            const error = new Error('El nombre es obligatorio');
            error.status = 400;
            throw error;
        }
        return await User.create({ name });
    },


    registroUser: async (body) => {
        //console.log("SERVICE" +body);
        if (!body) {
            const error = new Error('Sin dato');
            error.status = 400;
            throw error;
        }
        //1 Comprobamos si el usuario ya existe
        const usuarioExistente = await User.getByUsername(body.username);
        console.log("usuarioExistente" +usuarioExistente);
        if (usuarioExistente.length > 0) {
            const error = new Error('El usuario ya existe');
            error.status = 409;
            throw error; // Aquí solo lanzamos el error
        }
        // Si no existe, procedemos con el registro
        return await User.registro( body);
    },
    
    
    deleteUser: async (id) => {
        return await User.delete(id);
    }
};

module.exports = UserService;