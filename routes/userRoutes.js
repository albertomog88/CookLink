// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


// /users
router.get('/', userController.getAllUsers);

router.get('/registro', userController.toRegistro);

const { check, validationResult } = require('express-validator');
router.post('/registro', 
    check("password","La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial")
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&'*+-/=.?^_{|}@(),:;<>@[])/),
    check("password", "La longitud minima de la contraseña debe ser 8").isLength({ min: 8}),
    check("password", "La longitud máxima de la contraseña es de 50 carácteres").isLength({ max: 50}),
    check("confirm_password")
    .custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Las contraseñas no son iguales');
        }
        return true;
    })
    ,userController.registroUser);


// /users/create
router.post('/create', userController.createUser);

router.delete('/delete/:id', userController.deleteUser);

//router.get('/delete/:id', userController.deleteUser);


module.exports = router;