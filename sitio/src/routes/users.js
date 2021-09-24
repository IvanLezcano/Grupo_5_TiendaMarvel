const express = require("express");
const router = express.Router();

const validarRegistro = require('../validations/validRegistro')
const validLogin = require('../validations/validLogin');
const checkLogin = require('../middlewares/checkLogin');
const perfilMiddleware = require('../middlewares/perfilMiddleware')
const validPass = require('../validations/validPass');


const {
 login,
 registro,
 procesarRegistro,
 processLogin,
 logout,
 perfil,
 modificar,
 update,
 confirmacion,
 destroy
} = require("../controllers/usersController");


const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/users"); //Indica en donde se va a guardar la imagen
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    //indica el nombre del archivo. path.extname(extrae la extension del archivo(de su nombre original))
  },
});
const avatar = multer({ storage });
/* /users */
router.get("/login", checkLogin,login);
router.post("/login",validLogin,processLogin);
router.get("/logout", logout);
router.get("/registro",checkLogin, registro);
router.post(
  "/registro",
  avatar.single("imagenUsuario"),
  validarRegistro,
  procesarRegistro
);
router.get("/perfil", perfilMiddleware, perfil);
router.get("/modificar", perfilMiddleware, modificar);
router.put('/update/:id', avatar.single('avatar'),validPass,update);
router.get('/confirmar',perfilMiddleware,confirmacion);
router.delete('/delete',validLogin,destroy);

module.exports = router;
