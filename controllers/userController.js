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

exports.deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        await UserService.deleteUser(id);
        res.redirect('/users');
    } catch (err) {
        next(err);
    }
};