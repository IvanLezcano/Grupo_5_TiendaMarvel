const express = require("express");
const router = express.Router();
const validarRegistro = require('../validations/validRegistro')
const avatar = require('../middlewares/userMulter')

const {
 login,
 registro,
 procesarRegistro,
 perfil
 
} = require("../controllers/usersController");



/* /users */
router.get("/login", login);

router.get("/registro", registro);
router.post(
  "/registro",
  avatar.single("imagenUsuario"),
  validarRegistro,
  procesarRegistro
);
router.get("/perfil", perfil);
module.exports = router;
