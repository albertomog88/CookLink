const db = require("../config/database"); // Conexión a la base de datos

const Recipe = {

	async getRecipeById (id) {
		try {
			const recipe = await db.query("SELECT * FROM recetas WHERE id = ?", [ id ]);
			return recipe[0];
		}
		catch (error) {
			console.error("An error occurred while getting the recipe by id: ", error);
			throw new Error("An error occurred while getting the recipe by id: ", error);
		}
	}
};

module.exports = Recipe;
