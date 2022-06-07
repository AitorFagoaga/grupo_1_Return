const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/productCartEmpty', productsController.productCartEmpty);
router.get('/productCartFull', productsController.productCartFull);
router.get('/productDetail/:id', productsController.productDetail);
router.get('/productList', productsController.productList);
router.get('/vistaAdministrador', productsController.vistaAdministrador);
router.get('/agregarProducto', productsController.agregarProducto);


module.exports = router;