const path = require("path");
const bcryptjs = require('bcryptjs');//para encriptar el password- que sea brcyptjs
const fs = require('fs');
const {validationResult} = require('express-validator');

//productos

const User = require('../models/Users'); 


module.exports = {
  registro: (req, res) => {
    return res.render("registrarse");
  },
  procesarRegistro: (req, res) => {
    let resultadoValidacion = validationResult(req);
    //PARA NO REGISTRAR UN MISMO USUARIO DOS VECES, ANTES DE CREAR UN USUARIO
     let userInDB = User.buscarPorCampo("email", req.body.email);
    
    if (userInDB) {
    
      return res.render("registrarse", {
        errors: {
          email: {
            msg: "Este email ya está registrado",
          },
        }, 
        old: req.body, 
      });
    }
    //SI NO ESTA REGISTRADA SIGO CON EL PROCESO, GENERO LA INFORMACION DEL USUARIO
     let { usuario, nombre, email} = req.body;
     
     
    if (resultadoValidacion.isEmpty()) {
      let userToCreate = {
        /* usuario,
        password: bcryptjs.hashSync(req.body.password, 10), 
        nombre,
        email,
        imagenUsuario: req.file.filename, //uso el filename- nombre del archivo de imagen subido
        rol: "usuario" */
        ...req.body
      };
       console.log(userToCreate);
     

     User.crearUsuario(userToCreate); //Creo el usuario con el metodo del modelo
    console.log(User.crearUsuario(userToCreate));

      return res.redirect('/users/login'); //lo redirige al formulario del login /users/login
    } else {
      //si vienen resultadoValidacion
      /* if (req.file) {
        //Borro la imagen subida con multer
        let imgABorrar = path.join(
          __dirname,
          "../../public/images/users/" + req.file.filename
        );
        fs.unlinkSync(imgABorrar);
      } */
      return res.render("registrarse", {
        errors: resultadoValidacion.mapped(),
        old: req.body,
      });
    }
  },

  login: (req, res) => {
    return res.render("login");
  }
};



   