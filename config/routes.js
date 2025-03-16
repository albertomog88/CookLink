const indexRouter = require("../routes/index");
const userRouter = require("../routes/userRoutes");
const { notFound } = require("./httpcodes");
module.exports = app => {
	app.use("/", indexRouter);
	app.use("/users", userRouter);

	// Manejo de errores 404
	app.use((req, res, next) => {
		const error = new Error("Página no encontrada");
		error.status = notFound;
		next(error);
	});
};
