const { Router } = require("express");
const recipeController = require("../controllers/recipeController");
const router = Router();

router.get("/recommended", recipeController.getRecommendations);

module.exports = router;
