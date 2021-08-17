const express = require("express");
const router = express.Router();

const validarRegistro = require('../validations/validRegistro')
const avatar = require('../middlewares/userMulter')

const {
 login,
 registro,
 procesarRegistro
} = require("../controllers/usersController");


/* /users */
router.get("/login", login);
router.post("/login",validLogin,processLogin);
router.get("/registro", registro);

router.get("/registro", registro);
router.post(
  "/registro",
  avatar.single("imagenUsuario"),
  validarRegistro,
  procesarRegistro
);

module.exports = router;
