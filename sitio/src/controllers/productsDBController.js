let db = require("../database/models");
const { validationResult } = require("express-validator");
const {Op}= require('sequelize')
const path = require('path')
const fs = require('fs')



module.exports = {
 search: (req, res) => {
   db.Product.findAll({
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
    db.Category.findAll({include : [{association : "products"}]}).then(categorias => res.render("productos",{categorias}))

  },
  detail: (req, res) => {
       db.Product.findOne({
        where: {
          id: req.params.id,
        },
        include : [
            {association:'category'}
        ]
      }).then(producto =>{
        console.log(producto);
         db.Category.findOne({
              where: {
                  id: producto.categoryId,
              },
              include: [
                  {
                   association:'products'
                  }
                ]  
          }).then(category =>{
              return res.render("descripcion-producto", {
                
                   producto,
                  relacionados : category.products 
          })
      }).catch(error => console.log(error))
    }) 
      
    
},
ropa:(req,res) =>{db.Category.findOne({where:{name:"ropa"},include:[{association:"products"}]}).then(ropa => res.render("ropa",{ropa}))}

,
mercha:(req,res) =>{db.Category.findOne({where:{name:"merchandising"},include:[{association:"products"}]}).then(mercha => res.render("mercha",{mercha}))}

,
comics:(req,res) =>{db.Category.findOne({where:{name:"comics"},include:[{association:"products"}]}).then(comics => res.render("comics",{comics}))}

,
figura:(req,res) =>{db.Category.findOne({where:{name:"figuras"},include:[{association:"products"}]}).then(figura => res.render("figura",{figura}))}

,

  carga: (req, res) => {
    db.Category.findAll().then((categorias) => {
       return res.render("cargadeproducto", { categorias});
     
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
          "../../public/images/merchandising/" + req.file.filename
        );
        fs.unlinkSync(imgABorrar);
      }
      db.Category.findAll().then(categorias => 
        res.render("cargadeproducto", {
        categorias,
        errores: errors.mapped(),
        old: req.body,
      })).catch((error) => console.log(error));
    } 
  },
  modificar: (req, res) => {
    let pedidoProducto = db.Product.findByPk(req.params.id,{
      include:[{association:'category'}]
    });
    let pedidoCategorias = db.Category.findAll();

    Promise.all([pedidoProducto, pedidoCategorias])
      .then(([producto, categorias]) => {
        res.render("modificarproducto", {
          producto,
          categorias,
        });
      })
      .catch((error) => console.log(error));
  },
  update: async (req, res) => {
  
    let errores = validationResult(req);
    if (!errores.isEmpty()) {
      let pedidoProducto = db.Product.findByPk(req.params.id,{
        include:[{association:'category'}]
      });
      let pedidoCategorias = db.Category.findAll();
  
      Promise.all([pedidoProducto, pedidoCategorias])
        .then(([producto, categorias]) => {
          res.render("modificarproducto", {
            producto,
            categorias,
            old :req.body,
            errores : errores.mapped()
          });
        })
        .catch((error) => console.log(error));
    } else {
      let imagen = await db.Product.findByPk(req.params.id).then()

      if (req.file) {
        let rutaImg = path.join(
          __dirname,
          "../../public/images/merchandising/" + imagen.image
          );
          fs.unlinkSync(rutaImg);
      }
      
      db.Product.update(
        {
          ...req.body,
          image : req.file ? req.file.filename : imagen.image
        },
        {
          where: {
            id: req.params.id,
          },
        }
      ).then((response) => {
          return res.redirect("/productos");
        })
        .catch((error) => console.log(error));
    }
  },

  borrar: async (req, res) => {
    let imagen = await db.Product.findByPk(req.params.id).then()
    let rutaImg = path.join(
      __dirname,
      "../../public/images/merchandising/" + imagen.image
      );
      fs.unlinkSync(rutaImg);
    db.Product.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((response) => {
        return res.redirect("/productos");
      })
      .catch((error) => console.log(error));
   
  },
}

