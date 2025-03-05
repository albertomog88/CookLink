// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.post('/create', userController.createUser);
router.get('/delete/:id', userController.deleteUser);

module.exports = router;