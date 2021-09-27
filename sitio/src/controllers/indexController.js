const fs = require('fs')
const path = require("path");
let producto = path.join(__dirname,'../data/producto.json')
let productoparavista = JSON.parse(fs.readFileSync(producto, "utf-8"));
const db = require('../database/models')
const {Op}= require('sequelize')

module.exports = {
  index: (req, res) => {
    let category = db.Category.findAll({
      include: [{ association: "products" }],
    });
    let productsDiscount = db.Product.findAll({
      where: {
        discount: { [Op.is]: !null },
      },
      include: [{ association: "category" }],
    });
    Promise.all([category, productsDiscount]).then((response) =>
      res.render("index", {
        category: response[0],
        productsDiscount: response[1],
        productoparavista,
        ofertas: productoparavista,
      })
    );
  },
  detail: (req, res) => {
    db.Product.findOne({
      where: {
        id: req.params.id,
      },
      include: [{ association: "category" }],
    }).then((producto) => {
      console.log(producto);
      db.Category.findOne({
        where: {
          id: producto.categoryId,
        },
        include: [
          {
            association: "products",
          },
        ],
      })
        .then((category) => {
          return res.render("descripcion-producto", {
            producto,
            relacionados: category.products,
          });
        })
        .catch((error) => console.log(error));
    });
  },
  carrito: (req, res) => {
    let productofinal = productoparavista.find(
      (producto) => producto.id === +req.params.id
    );
    console.log(productofinal);
    return res.render("carrito", {
      productofinal,
      productoparavista,
      productosdelcarrito,
    });
  },
  contactos: (req, res) => {
    return res.render("contactos");
  },
  nosotros: (req, res) => {
    return res.render("sobrenosotros");
  },
  novedades: (req, res) => {
    return res.render("novedades");
  },
};
