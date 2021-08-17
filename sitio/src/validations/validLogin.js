const { check } = require("express-validator");
const path = require("path");
const fs = require("fs");

let validLogin = [
    check("email")
    .isEmail().withMessage('Debe ingresar un email válido'),
    check("password")
    .notEmpty().withMessage("El campo no puede estar vacío").bail()
    .isLength({min:4}).withMessage('Debe tener como minimo 4 (cuatro) caracteres'),
  ];

module.exports = validLogin;