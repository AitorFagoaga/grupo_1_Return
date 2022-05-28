const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/productCartEmpty', productsController.productCartEmpty);
router.get('/productCartFull', productsController.productCartFull);
router.get('/productDetail', productsController.productDetail);

module.exports = router;