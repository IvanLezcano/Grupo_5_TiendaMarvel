const express = require("express");
const router = express.Router();

const { index, contactos, nosotros, novedades,detail,carrito, admin } = require("../controllers/indexController");
/* /index */
router.get("/", index);
router.get('/admin',admin)
router.get("/contactos", contactos);
router.get("/nosotros", nosotros);
router.get("/novedades", novedades);
router.get("/detail/:id", detail);
router.get("/carrito/:id", carrito);



module.exports = router;
