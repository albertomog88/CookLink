// Models/userModel.js
const db = require("../config/database");
const bcrypt = require("bcrypt");
const { saltRounds } = require("../config/config");

const nombreTabla = "usuarios";

const User = {
	getAll: async () => {
		try {
			return await db.query(`SELECT * FROM ${nombreTabla}`);
		}
		catch (error) {
			console.log(error);
			throw Error("Error al obtener todos los usuarios");
		}
	},
	// GetByUsername
	getByUsername: async username => {
		try {
			// Console.log("Datos recibidos en el modelo:", { username });
			const sql = `SELECT username FROM ${nombreTabla} WHERE username = ?`;
			const [ result ] = await db.query(sql, [ username ]); // Destructuring para obtener solo el resultado
			return result;
		}
		catch (error) {
			console.log(error);
			throw new Error("Error al buscar usuario");
		}
	},
	registro: async ({ username, password }) => {
		try {
			if (username === "" || /[\s\t]/.test(username)) throw new Error();
			if (password === "" || /[\s\t]/.test(password)) throw new Error();
			const sql = `INSERT INTO ${nombreTabla} (username, password) VALUES (?, ?)`;
			const hashedPassword = await bcrypt.hash(password, saltRounds);
			return db.query(sql, [ username, hashedPassword ]);
		}
		catch (error) {
			console.log(error.message);
			throw new Error("registro Error al crear el usuario");
		}
	},
	delete: async id => {
		try {
			return await db.query(`DELETE FROM ${nombreTabla} WHERE id = ?`, [ id ]);
		}
		catch (error) {
			console.log(error);
			throw new Error("Error al eliminar el usuario");
		}
	}
};
module.exports = User;
