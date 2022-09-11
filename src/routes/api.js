const express = require("express");
const router = express.Router();

const controller = require("../controllers/apiController");

router.get("/product/:id", controller.product);
router.post("/checkout", controller.checkout);

/* lista de usuarios */
router.get("/listaUsuarios", controller.lista);
router.get("/detalle/:id", controller.detalle);

router.get("/listaProductos", controller.listaProductos);
router.get("/detalleProducto/:id", controller.detalleProductos);

module.exports = router;
