// controllers/userController.js
const UserService = require('../services/userService');
const { validationResult } = require('express-validator');
const { renderView } = require('../middlewares/viewHelper'); // Importamos la función centralizada

exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await UserService.getAllUsers();
        res.render('users', { users });
    } catch (err) {
        next(err);
    }
};

exports.createUser = async (req, res, next) => {
    try {
        const { name } = req.body;
        await UserService.createUser(name);
        res.redirect('/users');
    } catch (err) {
       next(err);
        
    }
};

// Redireccion a la pagina de registro
exports.toRegistro = async (req, res, next) => {
    try {
        renderView(res, 'registro', 200);
    } catch (err) {
        next(err);
    }
};

exports.registroUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Error details: ", JSON.stringify(errors.array(), null, 2));

        return renderView(res, 'registro', 400, { 
            mensajeError: errors.array()
        });
    }
    
    try {
        console.log(req.body);
        
        await UserService.registroUser(req.body);
        renderView(res, 'registro', 200, { mensajeExito: "Usuario registrado correctamente." });

    } catch (err) {      
        console.error("Error al crear usuario:", err.message);

        if (err.message === 'El usuario ya existe') {
            console.log("Error details2: ", JSON.stringify(errors.array(), null, 2));
            errors.errors.push({ msg: err.message });
            return renderView(res, 'registro', 409, { 
                mensajeError: errors.array() // Enviar un array con el mensaje de error
            });
        }

        renderView(res, 'registro', 500, { mensajeError: [err.message] });
    }
};

exports.deleteUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      await UserService.deleteUser(id);
      res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } catch (err) {
      next(err);
    }
};
  

