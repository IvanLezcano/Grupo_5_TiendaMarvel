const { Console } = require('console');
const fs = require('fs')
const path = require("path");
const {validationResult} = require('express-validator');



let categoriasDB = path.join(__dirname,'../data/categorias.json')
let categorias = JSON.parse(fs.readFileSync(categoriasDB, "utf-8"));

let producto = path.join(__dirname,'../data/producto.json')
let productoparavista = JSON.parse(fs.readFileSync(producto, "utf-8"));

let guardar = (products) => {
  fs.writeFileSync(
    path.join(__dirname, "../data/producto.json"),
    JSON.stringify(products, null, " "),
    "utf-8"
  );
};

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
     let id= producto[producto.length - 1].id + 1;//usar esta formula para generar id y asignarlo al guardar
    return res.render("cargadeproducto",{categorias});
  },
  create:(req, res) =>{
    let errors = validationResult(req);

   
    
    if (errors.isEmpty()) {
       let {nombre, descripcion,precio,categoria} = req.body;
     if((req, file)) {
      let producto = {
        id : producto[producto.length - 1].id + 1,
        nombre,
        imagen : req.file.filename,
        descripcion,
        precio : +precio,
        categoria
    }
    
   productoparavista.push(producto);
   guardar(productoparavista);
   return res.redirect('/productos')

    }else{
      res.render('/carga', {errors: errors.mapped(), old: req.body});
    }
  }

  },
  modificar: (req, res) => {
    let id = +req.params.id
    let producto = productoparavista.find(producto => producto.id === id)
    return res.render('modificarproducto',{
      categorias,
      productoparavista,
      producto
    })
  },
  update:(req, res) => {
    let {nombre, descripcion,precio,categoria} = req.body;
    const {filename} = req.file
    let id = +req.params.id;
    productoparavista.forEach(producto => {
        if(producto.id === id ){
          producto.nombre = nombre,
          producto.imagen=filename,
          producto.precio = +precio,
          producto.descripcion=descripcion,
          producto.categoria = categoria

        }      
        guardar(productoparavista);
    res.redirect('/productos');
    });
   }
};

