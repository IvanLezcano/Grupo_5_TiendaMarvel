const path = require("path");
const { validationResult } = require("express-validator");
module.exports = {
  login: (req, res) => {
    return res.render("login");
   
  },
  processLogin:(req,res)=>{
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      res.send('Logueado con exito')
    } else {
      return res.send(errors.mapped())
      res.render('login',{errores : errors.mapped(),old:req.body})
    }
  },
  
  registro: (req, res) => {
    return res.render("registrarse");
  },
}
