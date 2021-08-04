const path = require("path");
const productos = require("../data/products_db");


module.exports = {
  
  descripcion: (req, res) => {
    
     let producto = productos.find(
        (producto) => producto.id === +req.params.id
      );

        return res.render('descripcion-producto',{
            producto,
            productos
        })
  },
  carrito: (req, res) => {
    return res.render("carrito");
  },
  lista: (req, res) => {
    return res.render("productos");
  },
  carga: (req, res) => {
    return res.render("cargadeproducto");
  },
  modificar: (req, res) => {
    return res.render("modificarproducto");
  },
};

