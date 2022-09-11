const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/1', mainController.indexUno);
router.get('/2', mainController.indexDos);
router.get('/3', mainController.indexTres);

module.exports = router;