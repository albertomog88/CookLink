// models/userModel.js
const db = require('../config/database');

const nombreTabla = 'usuarios';

const User = {
    getAll: async () => {
        try {
            return await db.query(`SELECT * FROM ${nombreTabla}`);
        } catch (error) {
            throw new Error('Error al obtener los usuarios');
        }
    },
    create: async (user) => {
        try {
            return await db.query(`INSERT INTO ${nombreTabla} SET ?`, user);
        } catch (error) {
            throw new Error('Error al crear el usuario');
        }
    },

    
    registro: async ({ username, email, password }) => {
        //const { username, email, password } = body;
        
        try {
            return await db.query(`INSERT INTO ${nombreTabla} (username, email, password) VALUES (?, ?, ?)`, [username, email, password]);
        } catch (error) {
            throw new Error('Error al crear el usuario');
        }
    },
    delete: async (id) => {
        try {
            return await db.query(`DELETE FROM ${nombreTabla} WHERE id = ?`, [id]);
        } catch (error) {
            throw new Error('Error al eliminar el usuario');
        }
    }
};
module.exports = User;