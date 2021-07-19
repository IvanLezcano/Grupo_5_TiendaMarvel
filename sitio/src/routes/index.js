const express = require("express");
const router = express.Router();

const { index, contactos, nosotros, novedades } = require("../controllers/indexController");
/* /index */
router.get("/", index);
router.get("/contactos", contactos);
router.get("/nosotros", nosotros);
router.get("/novedades", novedades);

module.exports = router;
