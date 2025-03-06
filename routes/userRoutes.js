// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


// /users
router.get('/', userController.getAllUsers);

router.get('/registro', userController.toRegistro);


router.post('/registro', userController.registroUser);
// /users/create
router.post('/create', userController.createUser);

router.delete('/delete/:id', userController.deleteUser);

//router.get('/delete/:id', userController.deleteUser);


module.exports = router;