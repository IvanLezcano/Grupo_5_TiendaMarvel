const path = require("path");


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
    return res.render("cargadeproducto");
  },
  modificar: (req, res) => {
    return res.render("modificarproducto");
  },
};

