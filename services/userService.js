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
    deleteUser: async (id) => {
        return await User.delete(id);
    }
};

module.exports = UserService;