const express = require("express");
const router = express.Router();
const path = require('path')
const multer = require('multer'); 
const upload = require("../middlewares/multer");
const validacionCarga = require("../middlewares/validacionCarga");
const {
  search,
  descripcion,
  carrito,
  lista,
  carga,
  modificar,
  ropa,
  mercha,
  figura,
  comics,
  detail,
  update,
  create
} = require("../controllers/productsController");

//** MULTER **/
// 
/* const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/images'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  })
  const upload = multer({ storage });
 */

/* /productos */
router.get("/", lista);
router.get("/descripcion/:id?", descripcion);
router.get("/carrito", carrito);



router.get("/carga", carga);
router.post("/carga", upload.single("imagen"), validacionCarga, create);
router.get("/modificar/:id",modificar);
router.put("/modificar/:id",upload.single('imagen'),update);
router.get("/ropa", ropa);
router.get("/merchandising", mercha);
router.get("/comics", comics);
router.get("/figuras", figura);
router.get("/detail/:id", detail);
router.get("/carrito/:id", carrito);
router.get('/search',search);









module.exports = router;
