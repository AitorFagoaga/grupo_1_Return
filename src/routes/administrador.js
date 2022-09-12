const express = require("express");
const router = express.Router();
const administradorController = require("../controllers/administradorController");
const adminMiddleware = require("../middlewares/adminMiddleware");

router.get("/", adminMiddleware, administradorController.index);

router.get("/useredit/:id", adminMiddleware, administradorController.editvista);
router.delete("/useredit/:id", adminMiddleware, administradorController.delete);

router.put("/:id/", adminMiddleware, administradorController.edit);

router.get("/adminReact", adminMiddleware, administradorController.adminReact);


module.exports = router;
