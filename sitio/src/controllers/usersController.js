const path = require("path");
const bcryptjs = require("bcryptjs"); //para encriptar el password- que sea brcyptjs
const fs = require("fs");
const { validationResult } = require("express-validator");
const db = require('../database/models');


module.exports = {
  registro: (req, res) => {
    return res.render("registrarse");
  },
  procesarRegistro: (req, res) => {
    let resultadoValidacion = validationResult(req);
    let {nameUser,firstName,password,email}=req.body
    if (resultadoValidacion.isEmpty()) {
      db.User.create({
        nameUser:nameUser.trim(),
        firstName:firstName.trim(),
        email:email.trim(),
        password : bcryptjs.hashSync(req.body.password,10),
        avatar: req.file ? req.file.filename : req.body.nameUser[0].toUpperCase()+".jpg",
        rol:'usuario'
      }).then(user => {
        req.session.userLogin = {
            id : user.id,
            name : user.nameUser,
            avatar:user.avatar,
            rol:user.rol
        }
        return res.redirect('/')
      }).catch(error => console.log(error))
    } else {
       return res.render("registrarse", {
         errors: resultadoValidacion.mapped(),
         old: req.body,
       });
     }
  },
  login: (req, res) => {
    return res.render("login");
  },
  processLogin: (req, res) => {
    
    let resultadoValidacion = validationResult(req);
    const { email } = req.body;

    if(resultadoValidacion.isEmpty()){
      db.User.findOne({
        where:{
            email
        }
    }).then(user=>{
      req.session.userLogin = {
        id : user.id,
        name : user.nameUser,
        avatar:user.avatar,
        rol:user.rol,
        email:user.email,

      }
      let on = req.body.recordar;
     if (on) {
      res.cookie("user", req.session.userLogin, { maxAge: 120000 });
    }
      return res.redirect("/users/perfil");
    })
    }else {
      return res.render("login", {
        errors: resultadoValidacion.mapped(),
        old: req.body,
      });
    } 
  },
  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie('user');
    res.redirect("/");
  },
  perfil : (req,res) => {
  res.render('profile',{
    user:req.session.userLogin
  })
},
  update : (req,res) => {
 
    let resultadoValidacion = validationResult(req);
    console.log(resultadoValidacion.mapped());
    if(resultadoValidacion.isEmpty()){
      console.log('las contraseñas coinciden');
      const {name,password} = req.body;
      db.User.update(
          {
              nameUser : name.trim(),
              avatar: req.file ? req.file.filename : req.body.nameUser[0].toUpperCase()+".jpg",
              password :  password != " " && bcryptjs.hashSync(password,10)
          },
          {
              where : {
                  id : req.session.userLogin.id
              }
          }).then( () => res.redirect('/'))
    }else {
      console.log('las contraseñas no coinciden controlador');
      if(req.file){
        let imgABorrar= path.join(__dirname, "../../public/images/users/"+req.file.filename)
        fs.unlinkSync(imgABorrar) 
        }
      return res.render("profile", {
        errors: resultadoValidacion.mapped(),
        old: req.body,
        user: req.session.userLogin
      });
    } 
         
  },
  
}
