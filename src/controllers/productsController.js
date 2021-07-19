const path = require("path");


module.exports = {
  
  descripcion: (req, res) => {
    return res.render("descripcion-producto", {
      title: "descripcion",
    });

    /* let producto = productos.find(
        (producto) => producto.id === +req.params.id
      );

      return res.send(producto); */
  },
  carrito: (req, res) => {
    return res.render("carrito", {
      title: "carrito",
    });
  },
  lista: (req, res) => {
    return res.render("productos", {
      title: "productos",
    });
  },
  carga: (req, res) => {
    return res.render("cargadeproducto", {
      title: "carga de producto",
    });
  },
  modificar: (req, res) => {
    return res.render("modificarproducto", {
      title: "Modificar producto",
    });
  },
};

