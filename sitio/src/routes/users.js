const express = require("express");
const router = express.Router();

const validarRegistro = require('../validations/validRegistro')
const validLogin = require('../validations/validLogin');
const avatar = require('../middlewares/userMulter')
const checkLogin = require('../middlewares/checkLogin');
const perfilMiddleware = require('../middlewares/perfilMiddleware')

const {
 login,
 registro,
 procesarRegistro,
 processLogin,
 logout,
 perfil
} = require("../controllers/usersController");



/* /users */
router.get("/login", checkLogin,login);
router.post("/login",validLogin,processLogin);
router.get("/logout", logout);
router.get("/registro",checkLogin, registro);

router.get("/registro", registro);
router.post(
  "/registro",
  avatar.single("imagenUsuario"),
  validarRegistro,
  procesarRegistro
);
router.get("/perfil", perfilMiddleware, perfil);

module.exports = router;
