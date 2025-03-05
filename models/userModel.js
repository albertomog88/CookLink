// models/userModel.js
const db = require('../config/database');

const User = {
    getAll: async () => {
        try {
            return await db.query('SELECT * FROM users');
        } catch (error) {
            throw new Error('Error al obtener los usuarios');
        }
    },
    create: async (user) => {
        try {
            return await db.query('INSERT INTO users SET ?', user);
        } catch (error) {
            throw new Error('Error al crear el usuario');
        }
    },
    delete: async (id) => {
        try {
            return await db.query('DELETE FROM users WHERE id = ?', [id]);
        } catch (error) {
            throw new Error('Error al eliminar el usuario');
        }
    }
};
module.exports = User;