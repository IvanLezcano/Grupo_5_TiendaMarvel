const express = require("express");
const router = express.Router();

const { descripcion, carrito, lista, carga, modificar } = require("../controllers/productsController");

/* /productos */
router.get("/", lista);
router.get("/descripcion", descripcion);
router.get("/carrito", carrito);
router.get("/carga", carga);
router.get("/modificar", modificar);

module.exports = router;
