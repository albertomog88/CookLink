// controllers/userController.js
const UserService = require('../services/userService');
const { body, validationResult } = require('express-validator');
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
//rEDICECCION A LA PAGINA DE REGISTRO
exports.toRegistro = async (req, res, next) => {
    try {
        //res.render('registro', { mensajeError: null });
        renderView(res, 'registro');
    } catch (err) {
        next(err);
    }
};



exports.registroUser = async (req, res, next) => {

     // Capturar errores de validación
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
        //  return res.render('registro', { 
        //      mensajeError: errors.array().map(err => err.msg).join('. ') // Unir todos los errores en una sola cadena
        //  });
        console.log("Error details: ", JSON.stringify(errors.array(), null, 2));
//mensajeError: errors.array().map(err => err.msg).join('. ') 
        res.status(400);
        return renderView(res, 'registro', { 
            mensajeError: errors.array(),
            // 
        });
     }
    
    try {
        
        const { username, email, password } = req.body;
        console.log(req.body);
        
        await UserService.registroUser(req.body);

        //res.redirect('/users');
        res.status(200);
        renderView(res, 'registro', { mensajeExito: "Usuario registrado correctamente." });

    } catch (err) {
        
        console.error("Error al crear usuario:", err.message);
        // res.render('registro', 
        //     { 
        //         mensajeError: err.message}); // Renderiza la vista con el error
        // Aquí gestionamos el error, si el error es 'El usuario ya existe', lo mostramos de forma adecuada
        if (err.message === 'El usuario ya existe') {
            res.status(400);
            console.log("Error details2: ", JSON.stringify(errors.array(), null, 2));
            errors.errors.push({ msg: err.message });
            return renderView(res, 'registro', { 
                mensajeError: errors.array() // Enviar un array con el mensaje de error
            });
        }
        res.status(500);
        renderView(res, 'registro', { mensajeError: [err.message] });
    }
};



// exports.deleteUser = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         await UserService.deleteUser(id);
//         res.redirect('/users');
//     } catch (err) {
//         next(err);
//     }
// };

exports.deleteUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      await UserService.deleteUser(id);
      res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } catch (err) {
      next(err);
    }
  };
  

