const fs = require('fs')
const path = require("path");
let producto = path.join(__dirname,'../data/producto.json')
let productoparavista = JSON.parse(fs.readFileSync(producto, "utf-8"));



module.exports = {
  index: (req, res) => {
    return res.render("index",{productoparavista, ofertas : productoparavista.filter(producto => producto.estado === "oferta")}
    )},
    detail : (req,res) => {
      let productofinal = productoparavista.find(producto => producto.id === +req.params.id);
      console.log(productofinal)
      return res.render('descripcion-producto',{
        productofinal,productoparavista
      })
  },
  carrito : (req,res) => {
     
    let productofinal = productoparavista.find(producto => producto.id === +req.params.id);
    console.log(productofinal)
    return res.render('carrito',{
      productofinal,productoparavista,productosdelcarrito
    })
  },
  contactos: (req, res) => {
    return res.render("contactos");
  },
  nosotros: (req, res) => {
    return res.render("sobrenosotros");
  },
  novedades: (req, res) => {
    return res.render("novedades");
  }
}
