const express = require("express");
const router = express.Router();

const { search,descripcion, carrito, lista, carga, modificar ,ropa,mercha,figura,comics,detail} = require("../controllers/productsController");

/* /productos */
router.get("/", lista);
router.get("/descripcion", descripcion);
router.get("/carrito", carrito);



router.get("/carga", carga);
router.get("/modificar", modificar);
router.get("/ropa", ropa);
router.get("/merchandising", mercha);
router.get("/comics", comics);
router.get("/figuras", figura);
router.get("/detail/:id", detail);
router.get("/carrito/:id", carrito);
router.get('/search',search);









module.exports = router;
