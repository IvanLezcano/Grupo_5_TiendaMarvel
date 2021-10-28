const express = require("express");
const router = express.Router();
const perfilMiddleware = require('../middlewares/perfilMiddleware')

const { index, contactos, nosotros, novedades,detail,carrito, admin } = require("../controllers/indexController");
/* /index */
router.get("/", index);
router.get('/admin', perfilMiddleware, admin)
router.get("/contactos", contactos);
router.get("/nosotros", nosotros);
router.get("/novedades", novedades);
router.get("/detail/:id", detail);




module.exports = router;
