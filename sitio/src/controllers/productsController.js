const { Console } = require("console");
const fs = require("fs");
const path = require("path");

//categorias
let categoriasDB = path.join(__dirname, "../data/categorias.json");
let categorias = JSON.parse(fs.readFileSync(categoriasDB, "utf-8"));

//productos
let producto = path.join(__dirname, "../data/producto.json");
let productoparavista = JSON.parse(fs.readFileSync(producto, "utf-8"));

//validacion
const { validationResult } = require("express-validator");
const upload = require('../middlewares/multer')

//metodo guardar
let guardar = (products) => {
  fs.writeFileSync(
    path.join(__dirname, "../data/producto.json"),
    JSON.stringify(products, null, " "),
    "utf-8"
  );
};

module.exports = {
  descripcion: (req, res) => {
    return res.render("descripcion-producto");

  },
  carrito: (req, res) => {
    let productosdelcarrito = ["ada", "adadada"];
    console.log(productosdelcarrito);
    localStorage.setItem(
      "productosdelcarrito",
      JSON.stringify(productosdelcarrito)
    );

    if (localStorage.getItem("Tareas") === null) {
      this.crearObjeto();
    }

    return res.render("carrito");
  },
  detail: (req, res) => {
    let productofinal = productoparavista.find(
      (producto) => producto.id === +req.params.id
    );
    console.log(productofinal);
    return res.render("descripcion-producto", {
      productofinal,
      productoparavista,
    });
  },
  carrito: (req, res) => {
    let productofinal = productoparavista.find(
      (producto) => producto.id === +req.params.id
    );

    return res.render("carrito", {
      productofinal,
      productoparavista,
    });
  },
  search: (req, res) => {
    let resultado2 = productoparavista.filter((producto) =>
      producto.nombre
        .toLowerCase()
        .includes(req.query.search.toLowerCase().trim())
    );

    return res.render("resultado", {
      resultado2,
      productoparavista,
      busqueda: req.query.search,
    });
  },
  lista: (req, res) => {
    return res.render("productos", {
      comics: productoparavista.filter(
        (producto) => producto.categoria === "Comic"
      ),
      mercha: productoparavista.filter(
        (producto) => producto.categoria === "Merchandising"
      ),
      figura: productoparavista.filter(
        (producto) => producto.categoria === "Figura"
      ),

      ropa: productoparavista.filter(
        (producto) => producto.categoria === "Ropa"
      ),
    });
  },
  ropa: (req, res) => {
    return res.render("ropa", {
      ropa: productoparavista.filter(
        (producto) => producto.categoria === "Ropa"
      ),
    });
  },
  mercha: (req, res) => {
    return res.render("mercha", {
      mercha: productoparavista.filter(
        (producto) => producto.categoria === "Merchandising"
      ),
    });
  },
  figura: (req, res) => {
    return res.render("figura", {
      figura: productoparavista.filter(
        (producto) => producto.categoria === "Figura"
      ),
    });
  },
  comics: (req, res) => {
    return res.render("comics", {
      comics: productoparavista.filter(
        (producto) => producto.categoria === "Comic"
      ),
    });
  },
  carga: (req, res) => {
  
    return res.render("cargadeproducto", { categorias });
  },
  create: (req, res) => {
    let errors = validationResult(req);
    let {nombre,precio, marca, descripcion, categoria} = req.body;
   
   
    if (errors.isEmpty()) {
      
    
        let producto = {
          id: productoparavista[productoparavista.length - 1].id + 1,
          nombre,
          imagen: req.file.filename,
          precio: +precio,
          marca,
          descripcion,
          categoria,
        };

        productoparavista.push(producto);
        guardar(productoparavista);

        return res.redirect("/productos");
      } else {
       return res.render("cargadeproducto", {
          categorias,
          errores: errors.mapped(), 
          old: req.body 
        });
      }
    
  },

  modificar: (req, res) => {
    let id = +req.params.id;
    let producto = productoparavista.find((producto) => producto.id === id);
    return res.render("modificarproducto", {
      categorias,
      productoparavista,
      producto,
    });
  },
  update: (req, res, next) => {
    let errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.render("modificarproducto", {
        categorias,
        producto,
        errores: errores.mapped(),
        old: req.body,
      });
    }
    let { nombre, descripcion, precio, categoria } = req.body;
    const { filename } = req.file;
    let id = +req.params.id;
    productoparavista.forEach((producto) => {
      if (producto.id === id) {
        (producto.nombre = nombre),
          (producto.imagen = filename),
          (producto.precio = +precio),
          (producto.descripcion = descripcion),
          (producto.categoria = categoria);
      }
    });

    guardar(productoparavista);
    res.redirect("/productos");
  },
};
