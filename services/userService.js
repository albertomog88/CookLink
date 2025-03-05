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
        
        return await User.registro( body);
    },
    deleteUser: async (id) => {
        return await User.delete(id);
    }
};

module.exports = UserService;