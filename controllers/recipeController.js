const RecipeService = require("../services/recipeService"); // Servicio de recetas
// Const { validationResult } = require("express-validator");
const { renderView } = require("../middlewares/viewHelper"); // Importamos la función centralizada
const { ok, badRequest, conflict, notFound } = require("../config/httpcodes");

exports.getRecommendations = (req, res) => {
	res.send(ok);
};

exports.getRecipeInfo = async (req, res, next) => {
	try {
		const { id } = req.params;
		// ESTO EN EL MODEL
		// If (!id) return renderView(res, "recipe-info", badRequest, { mensajeError: "ID receta no encontrado." });

		const recipe = await RecipeService.getRecipeById(id);
		// If (!recipe) return renderView(res, "recipe-info", notFound, { mensajeError: "Receta no encontrada." });
		console.log(recipe);
		renderView(res, "recipe-info", ok, { recipe });
	}
	catch (err) {
		next(err);
	}
};
