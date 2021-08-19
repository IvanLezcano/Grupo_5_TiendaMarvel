const fs = require("fs");
const usuariosDB = require('../data/user_db');
const path = require('path');

const User = {
  
 
  listaUsuarios: function(){
    return usuariosDB.usuarios
  },
      
  generarId: function () {
    let allUsers = this.listaUsuarios();
    let lastUser = allUsers.pop(); //Toma al ultimo usuario
    if (lastUser) {
      //si tengo un ultimo usuario
      return lastUser.id + 1; 
    }
    return 1; //Si el archivo fuera un array vacio, le pongo 1 al id
  },

  buscarPorId: function (id) {
    
     let allUsers = this.listaUsuarios();
     let userFound = allUsers.find((oneUser) => oneUser.id === id);
     return userFound; 
  },

  buscarPorCampo: function (field, text) {
    
    let allUsers = this.listaUsuarios();
    let userFound = allUsers.find((oneUser) => oneUser[field] === text);
     return userFound;
    
  },
   
  borrar: function (id) {
    //identifico al usuario a eliminar por el id
     let allUsers = this.listaUsuarios();
    let finalUsers = allUsers.filter((oneUser) => oneUser.id !== id);
     return true;
  },
};

 
module.exports = User;
