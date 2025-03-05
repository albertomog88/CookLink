// config/routes.js
const indexRouter = require('../routes/index');
const userRouter = require('../routes/userRoutes');

module.exports = (app) => {
    app.use('/', indexRouter);
    app.use('/users', userRouter);
    
    // Manejo de errores 404
    app.use((req, res, next) => {
        const error = new Error('Página no encontrada');
        error.status = 404;
        next(error);
    });
};