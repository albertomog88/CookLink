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
        //const { name } = req.body;

        //console.log(req.body);
        res.render('registro');
        //await UserService.createUser(name);
        //res.redirect('/users');
    } catch (err) {
        next(err);
    }
};



exports.registroUser = async (req, res, next) => {
    try {
        //const { name } = req.body;
        const { username, email, password } = req.body;
        console.log(req.body);
        //res.render('registro');
        await UserService.registroUser(req.body);
        //res.redirect('/users');
    } catch (err) {
        next(err);
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
  

