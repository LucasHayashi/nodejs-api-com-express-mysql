const express = require("express");
const router = express.Router();
const usuarios = require("../controller/usuarios.controller");

router.get('/', usuarios.inicio);
router.post('/registrar', usuarios.registrar);
router.post('/login', usuarios.login);

module.exports = router;