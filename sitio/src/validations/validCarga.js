const { body, check } = require("express-validator");
const path = require('path');
const multer = require('../middlewares/multer')


module.exports = [
  check("nombre")
  .notEmpty().withMessage("El nombre es obligatorio"),
  /* .isLength({
      min: 2,
      max: 50,
    }).withMessage("El nombre tiene que tener como mínimo 2 caracteres").bail()
    .isAlpha().withMessage("El nombre debe contener solo letras"), */

  body("imagen").custom((value, { req }) => {
    let file = req.file;
    if (!file) {
      throw new Error("Debe subir una imagen");
    }
    return true;
  }),

  /* body("imagen").custom((value, { req }) => {
    let file = req.file;

    let extensiones = [".jpg", ".png", ".img"];
    if (!file) {
      throw new Error("Tienes que subir una imagen");
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!extensiones.includes(fileExtension)) {
        throw new Error(`Las extensiones de archivo permitidas son
                ${extensiones.join(", ")}`);
      }
    }
  }), */

  check("precio")
  .notEmpty().withMessage("Debes completar el precio"),

  check("marca")
  .notEmpty().withMessage("Debes indicar la marca"),

  check("descripcion")
    .notEmpty()
    .withMessage("Debes completar la descripción del producto"),

  check("categoria").notEmpty().withMessage("Debes elegir la categoria"),
];
