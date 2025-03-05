// middlewares/errorHandler.js
module.exports = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).render('error', { 
        error: err.message || 'Error interno del servidor', 
        status: err.status || 500 
    });
};