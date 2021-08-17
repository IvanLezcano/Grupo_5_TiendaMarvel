const { body, check } = require("express-validator");
const path = require('path');



module.exports = [
  check("usuario")
  .notEmpty().withMessage("El nombre de Usuario es obligatorio").bail()
  .isLength({
      min: 2,
      max: 50,
    }).withMessage("El nombre tiene que tener como mínimo 2 caracteres"),

    check("password")
    .notEmpty()
    .withMessage("Tienes que colocar una contraseña"),

  
    check("nombre")
  .notEmpty().withMessage("Debes colocar tu nombre y apellido").bail()
  .isLength({
      min: 2,
      max: 50,
    }).withMessage("El nombre tiene que tener como mínimo 2 caracteres"),

      check("email")
  .notEmpty().withMessage("Debes colocar tu email").bail()
  .isEmail().withMessage("Tiene que tener formato de email"),
    

   body("imagenUsuario").custom((value, { req }) => {
    let file = req.file;

    let extensiones = [".jpg", ".png", ".img"];
    if (file) {
       let fileExtension = path.extname(file.originalname);
      if (!extensiones.includes(fileExtension)) {
        throw new Error(`Las extensiones de archivo permitidas son
                ${extensiones.join(", ")}`);
      }
    } return true;
  })
 
 
  
];