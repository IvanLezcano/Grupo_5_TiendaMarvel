const fs = require('fs')
const path = require("path");

let categoriasDB = path.join(__dirname,'../data/categorias.json')
let categorias = JSON.parse(fs.readFileSync(categoriasDB, "utf-8"));

module.exports = {
  
  descripcion: (req, res) => {
    return res.render("descripcion-producto");

    /* let producto = productos.find(
        (producto) => producto.id === +req.params.id
      );

      return res.send(producto); */
  },
  carrito: (req, res) => {
    return res.render("carrito");
  },
  lista: (req, res) => {
    return res.render("productos");
  },
  carga: (req, res) => {
    return res.render("cargadeproducto",{categorias});
  },
  modificar: (req, res) => {
    return res.render("modificarproducto");
  },
};

