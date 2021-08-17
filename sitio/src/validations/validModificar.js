const { check } = require("express-validator");
const path = require("path");
const fs = require("fs");
//productos
let producto = path.join(__dirname, "../data/producto.json");

let validarModificar = [
  check("nombre").notEmpty().withMessage("El campo no puede estar vacío"),
  check("precio").notEmpty().withMessage("El campo no puede estar vacío"),
  check("descripcion").notEmpty().withMessage("El campo no puede estar vacío"),
  check("categoria").notEmpty().withMessage("El campo no puede estar vacío"),
];

module.exports = validarModificar;
