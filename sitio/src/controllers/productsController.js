const { Console } = require('console');
const fs = require('fs')
const path = require("path");


let categoriasDB = path.join(__dirname,'../data/categorias.json')
let categorias = JSON.parse(fs.readFileSync(categoriasDB, "utf-8"));

let productosDB = path.join(__dirname,'../data/productos.json')
let productos = JSON.parse(fs.readFileSync(productosDB, "utf-8"));
let producto = path.join(__dirname,'../data/producto.json')
let productoparavista = JSON.parse(fs.readFileSync(producto, "utf-8"));


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
    let productosdelcarrito=["ada","adadada"]
      console.log(productosdelcarrito)
      localStorage.setItem("productosdelcarrito",JSON.stringify(productosdelcarrito))
    
      if (localStorage.getItem("Tareas") === null) {
        this.crearObjeto()}

    return res.render("carrito");
  },
  detail : (req,res) => {
    let productofinal = productoparavista.find(producto => producto.id === +req.params.id);
    console.log(productofinal)
    return res.render('descripcion-producto',{
      productofinal,productoparavista
    })
},
carrito : (req,res) => {
  let productofinal = productoparavista.find(producto => producto.id === +req.params.id);

  return res.render('carrito',{
    productofinal,productoparavista,
  })
},
search : (req,res) => {
  let resultado2 = productoparavista.filter(producto => producto.nombre.toLowerCase().includes(req.query.search.toLowerCase().trim()))
  

  return res.render('resultado',{
    resultado2,
      productoparavista,
      busqueda : req.query.search
  })

},
  lista: (req, res) => {
    return res.render("productos",{comics : productoparavista.filter(producto => producto.categoria === "Comic"),
    mercha : productoparavista.filter(producto => producto.categoria === "Merchandising"),
    figura : productoparavista.filter(producto => producto.categoria === "Figura"),

    ropa : productoparavista.filter(producto => producto.categoria === "Ropa")});
  },
  ropa: (req, res) => {
    return res.render("ropa",{
    ropa : productoparavista.filter(producto => producto.categoria === "Ropa")});
  },
  mercha: (req, res) => {
    return res.render("mercha",{
      mercha : productoparavista.filter(producto => producto.categoria === "Merchandising")});
    },
    figura: (req, res) => {
      return res.render("figura",{
        figura : productoparavista.filter(producto => producto.categoria === "Figura")});
      },
      comics: (req, res) => {
        return res.render("comics",{
          comics : productoparavista.filter(producto => producto.categoria === "Comic")});
        },
  carga: (req, res) => {
    return res.render("cargadeproducto",{categorias});
  },
  modificar: (req, res) => {
    let producto = productos.find(producto => producto.id === 1)
    console.log(producto.nombre)
    return res.render('modificarproducto',{
      categorias,
      productos,
      producto
  })
  },
};

