const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../../public/images/products"));
    }, 
    filename: function (req, file, cb) {
        let imageName = Date.now() + "-" + path.extname(file.originalname);
        cb(null, imageName);
    }  
})

const upload = multer({storage});

router.get('/productCartEmpty', productsController.productCartEmpty);
router.get('/productCartFull', productsController.productCartFull);
router.get('/productDetail/:id', productsController.productDetail);
router.get('/productList', productsController.productList);
router.get('/vistaAdministrador', productsController.vistaAdministrador);

// Modificar image con el nombre del input
router.get('/agregarProducto', productsController.vistaAgregarProducto);
router.post('/productList', upload.single('image'), productsController.agregarProducto);


module.exports = router;