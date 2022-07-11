
const express = require('express');
const router = express.Router();
const path = require('path');
const usersController = require('../controllers/usersController');
const { body } = require('express-validator');
const multer = require('multer');
const loggedUserMiddleware = require('../middlewares/loggedUserMiddleware');
const profileAuthMiddleware = require('../middlewares/profileAuthMiddleware');


const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, path.join(__dirname, "../../public/images/users"));
    },
    filename: (req,file,cb) => {
        let imageName = Date.now() + "-" +  path.extname(file.originalname);
        cb(null, imageName);
    }
})

const upload = multer({storage});

const validations = [
    body('name').notEmpty().withMessage('Debes poner tu nombre'),
    body('category').notEmpty().withMessage('Debes elegir una categoria'),
    body('image').custom((value, {req})=>{
        let image = req.file;
        let fileExtention = path.extname(image.originalname);
        let extensions = ['.jpg','.png'];
        if(!image){
            throw new Error ("Debes colocar una foto de perfil")
        }else{
            if(!extensions.includes(fileExtention)){
                throw new Error ("Debes colocar una imagen con .jpg o .png")
            }
        }
        return true;
    }),
    body('email')
        .notEmpty().withMessage('Debes colocar un email').bail()
        .isEmail().withMessage('Debes colocar un formato de email valido'),
    body('password').notEmpty().withMessage('La contraseña debe de tener menos de 8 caracteres')
];

router.get('/login', loggedUserMiddleware, usersController.login);
router.post('/login', usersController.processLogin);

router.get('/register', loggedUserMiddleware, usersController.register);
router.post('/register', upload.single('image'), validations, usersController.processRegister);

router.get('/profile', profileAuthMiddleware, usersController.profile);
router.get('/logout', usersController.logout);

module.exports = router;