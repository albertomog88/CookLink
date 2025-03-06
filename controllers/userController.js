// controllers/userController.js
const UserService = require('../services/userService');

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
        res.render('registro', { mensajeError: null });
    } catch (err) {
        next(err);
    }
};



exports.registroUser = async (req, res, next) => {
    try {
        
        const { username, email, password } = req.body;
        console.log(req.body);
        
        await UserService.registroUser(req.body);
        //res.redirect('/users');
        res.render('registro', { mensajeError: null});
    } catch (err) {
        
        console.error("Error al crear usuario:", err.message);
        res.render('registro', { mensajeError: err.message}); // Renderiza la vista con el error
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
  

