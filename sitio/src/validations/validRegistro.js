const { body, check } = require("express-validator");
const path = require('path');
const db = require('../database/models')



module.exports = [
  check("nameUser")
    .notEmpty()
    .withMessage("El Campo es obligatorio")
    .bail()
    .isLength({
      min: 2,
      max: 50,
    })
    .withMessage("El nombre tiene que tener como mínimo 2 caracteres"),

  check("password")
    .notEmpty()
    .withMessage("Tienes que colocar una contraseña")
    .bail()
    .isLength({
      min: 8
    })
    .withMessage("La contraseña debe tener como minimo 8 caracteres"),

    check("firstName")
    .notEmpty()
    .withMessage("Debes colocar tu nombre")
    .bail()
    .isLength({
      min: 2,
      max: 50,
    })
    .withMessage("El nombre tiene que tener como mínimo 2 caracteres"),

  check("email")
    .notEmpty()
    .withMessage("Debes colocar tu email")
    .bail()
    .isEmail()
    .withMessage("Tiene que tener formato de email"),

    body('email')
    .custom(value => {
        console.log(value)
        return db.User.findOne({
            where : {
                email : value
            }
        }).then(user => {
            if(user){
                return Promise.reject('El email ya está registrado')
            }
        })
    }),

  body("imagenUsuario").custom((value, { req }) => {
    let file = req.file;

    let extensiones = [".jpg", ".png", ".img"];
    if (file) {
      let fileExtension = path.extname(file.originalname);
      if (!extensiones.includes(fileExtension)) {
        throw new Error(`Las extensiones de archivo permitidas son
                ${extensiones.join(", ")}`);
      }
    }
    return true;
  }),
];