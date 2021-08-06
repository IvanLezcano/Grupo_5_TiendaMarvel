const { body, check} = require("express-validator");

let validacionCarga = [
  body("nombre").notEmpty().withMessage("Debes completar el nombre"),

  body("imagen").custom((value, { req }) => {
    let file = req.file;
    let extensiones = [".jpg", ".png", ".gif"];
    if (!file) {
      throw new Error("Tienes que subir una imagen");
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!extensiones.includes(fileExtension)) {
        throw new Error(`Las extensiones de archivo permitidas son
                ${extensiones.join(", ")}`);
      }
    }
  }),

  body("precio").notEmpty().withMessage("Debes completar el nombre"),

  body("descripcion").notEmpty().withMessage("Debes completar el nombre"),

  body("categoria").notEmpty().withMessage("Debes completar el nombre"),
];

module.exports = validacionCarga;
