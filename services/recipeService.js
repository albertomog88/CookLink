const Recipe = require("../models/recipeModel");

const RecipeService = {
	getAllRecipes: () => Recipe.getAllRecipes(),
	getRecipeById: id => Recipe.getRecipeById(id)

};

module.exports = RecipeService;
