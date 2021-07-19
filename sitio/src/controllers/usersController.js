const path = require("path");

module.exports = {
  login: (req, res) => {
    return res.render("login", {
      title: "login",
    });
   
  },
  
  registro: (req, res) => {
    return res.render("registrarse");
  },
}
