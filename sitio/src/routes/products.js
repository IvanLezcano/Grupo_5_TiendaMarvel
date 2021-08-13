const express = require("express");
const router = express.Router();
const path = require('path')

const { search,borrar,descripcion, carrito, lista, carga, modificar ,ropa,mercha,figura,comics,detail,update,create} = require("../controllers/productsController");
let validarModificar = require('../validations/validModificar')
let validarCarga = require('../validations/validCarga')
let upload = require('../middlewares/multer')

 
/* /productos */
router.get("/", lista);
router.get("/descripcion", descripcion);
router.get("/carrito", carrito);



router.get("/carga", carga);
router.post("/carga", upload.single("imagen"), validarCarga, create);
router.get("/modificar/:id",modificar);
router.put("/modificar/:id",upload.single('imagen'),validarModificar,update);
router.get("/ropa", ropa);
router.get("/merchandising", mercha);
router.get("/comics", comics);
router.get("/figuras", figura);
router.get("/detail/:id", detail);
router.delete('/borrar/:id',borrar);
router.get("/carrito/:id", carrito);
router.get('/search',search);









module.exports = router;
