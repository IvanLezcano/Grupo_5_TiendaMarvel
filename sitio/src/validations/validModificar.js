const { check } = require("express-validator");
const path = require("path");
const fs = require("fs");
//productos
let producto = path.join(__dirname, "../data/producto.json");

let validarModificar = [
  check("title").notEmpty().withMessage("El campo no puede estar vacío"),
  

  check("price").notEmpty().withMessage("El campo no puede estar vacío")
  .isNumeric().withMessage("Debe ser un número"),

  check("discount").isNumeric().withMessage("El campo debe ser numérico")
  .isNumeric().withMessage("Debe ser un número"),

  check("description").notEmpty().withMessage("El campo no puede estar vacío"),

  check("categoryId").notEmpty().withMessage("El campo no puede estar vacío"),

];

module.exports = validarModificar;
