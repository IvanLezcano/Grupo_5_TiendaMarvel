const path = require("path");
const bcryptjs = require('bcryptjs');//para encriptar el password- que sea brcyptjs
const fs = require('fs');
const {validationResult} = require('express-validator');

let usuarios = path.join(__dirname, "../data/users.json");
let usuariosDB = JSON.parse(fs.readFileSync(usuarios, "utf-8"));

let guardar = (users) => {
  fs.writeFileSync(
    path.join(__dirname, "../data/users.json"),
    JSON.stringify(users, null, " "),
    "utf-8"
  );
};



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
   
     
    if (resultadoValidacion.isEmpty()) {
      let userToCreate = {
        id: User.generarId(),
        ...req.body,
        password: bcryptjs.hashSync(req.body.password, 10), 
        imagenUsuario:req.file? req.file.filename: 'default-avatar.jpg', //uso el filename- nombre del archivo de imagen subido
        rol: "usuario"  
      };
      
     
      usuariosDB.push(userToCreate)
      guardar(usuariosDB) 

    
      return res.redirect('/users/login'); 
    } else {
     
       if (req.file) {
        
        let imgABorrar = path.join(
          __dirname,
          "../../public/images/users/" + req.file.filename
        );
        fs.unlinkSync(imgABorrar);
      } 
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



   