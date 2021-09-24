let db = require("../database/models");
const { validationResult } = require("express-validator");
const {Op}= require('sequelize')


module.exports = {
 search: (req, res) => {
   db.Product.finAll({
     where: {
       [Op.or]: [
         {
           title: {
             [Op.substring]: req.query.search,
           }
         },
         {
           description: {
             [Op.substring]: req.query.search,
           }
         }
       ]
     },
   }).then(resultado => res.render("resultado", {
      resultado,
      busqueda: req.query.search,
    })).catch(error =>console.log(error))
 },

  lista: (req, res) => {
      db.Category.findAll()
      .then(categorias =>{
          return res.render("productos", {
              categorias
      }).catch(error => console.log(error))
  })
  },
  detail: (req, res) => {
     
      db.Product.findOne({
        where: {
          id: req.params.id,
        }/* ,
        include : [
            {asocciation:'category'}
        ] */
      }).then(producto =>{
        return res.send(producto)
          console.log(producto);
         /*  db.Category.findOne({
              where: {
                  id: producto.categoryId,
                include: [
                    {
                     assotiation: 'products'
                    }
                ]
              }
          }).then(category =>{
            return res.send(category)
              return res.render("descripcion-producto", {
                
                   producto,
                  relacionados : category.products 
          })
      }).catch(error => console.log(error))
 */
  })
},
  carga: (req, res) => {
    db.Product.finAll().then((produto) => {
      return res.render("cargadeproducto", { category, cart });
    });
  },
  create: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      db.Product.create({
        ...req.body,
        image: req.file.filename,
      })
        .then((product) => {
          return res.redirect("/productos");
        })
        .catch((error) => console.log(error));

    } else {
      if (req.file) {
        let imgABorrar = path.join(
          __dirname,
          "../../public/images/merchandinsing/" + req.file.filename
        );
        fs.unlinkSync(imgABorrar);
      }
      db.Category.finAll()
      return res.render("cargadeproducto", {
          categorias,
          errores: errors.mapped(),
          old: req.body,
        })
       .catch((error) => console.log(error));
    }
  },
  modificar: (req, res) => {
    let pedidoProducto = db.Product.findByPk(req.params.id);
    let pedidoCategorias = db.Category.finAll();

    Promise.all([pedidoProducto, pedidoCategorias])
      .then(([producto, categoria]) => {
        res.render("modificarproducto", {
          producto,
          categoria,
        });
      })
      .catch((error) => console.log(error));
  },
  update: (req, res) => {
    let errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.render("modificarproducto", {
        categoria,
        producto,
        errores: errores.mapped(),
        old: req.body,
      });
    } else {
      db.Product.update(
        {
          ...req.body,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      )
        .then((response) => {
          console.log(response);
          return res.redirect("/productos");
        })
        .catch((error) => console.log(error));
    }
  },

  borrar: (req, res) => {
    db.Product.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((response) => {
        console.log(response);
        return res.redirect("/productos");
      })
      .catch((error) => console.log(error));
    var fs = require("fs");
    var filePath = path.join(
      __dirname,
      "../../public/images/merchandinsing/" + productoaborrar.imagen
    );
    fs.unlinkSync(filePath);
    console.log(productoaborrar);
    guardar(productoparavista);
    res.redirect("/");
  },
}

