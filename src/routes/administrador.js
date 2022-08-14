const express = require("express");
const router = express.Router();
const administradorController = require("../controllers/administradorController");

router.get("/", administradorController.index);

router.get("/useredit/:id", administradorController.editvista);
router.delete("/useredit/:id", administradorController.delete);

router.put("/:id/", administradorController.edit);

module.exports = router;
