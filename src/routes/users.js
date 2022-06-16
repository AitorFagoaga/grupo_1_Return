
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const { body } = require('express-validator');

const validations = [
    body('name').notEmpty().withMessage('Debes poner tu nombre'),
    body('email')
        .notEmpty().withMessage('Debes colocar un email').bail()
        .isEmail().withMessage('Debes colocar un formato de email valido'),
    body('password').notEmpty().withMessage('La contraseña debe de tener menos de 8 caracteres')
];

router.get('/login', usersController.login);

router.get('/register', usersController.register);
router.post('/register', validations ,usersController.processRegister);

module.exports = router;