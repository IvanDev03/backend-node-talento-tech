const express = require('express');
const usuarioService = require("../src/service/usuario-service.js");
const router = express.Router();

router.post("/", usuarioService.createUsuario);
router.get("/", usuarioService.getUsuarios);
router.get("/:id", usuarioService.getUsuario);
router.put("/:id", usuarioService.updateUsuario);
router.delete("/:id", usuarioService.deleteUsuario);

module.exports = router;
