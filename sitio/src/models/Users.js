const fs = require("fs");
const usuariosDB = require('../data/user_db');
const path = require('path');

const User = {
  
 
  listaUsuarios: function(){
    return usuariosDB
  },
      
  generarId: function () {
    let allUsers = this.listaUsuarios();
    let lastUser = allUsers.pop(); //Toma al ultimo usuario
    if (lastUser) {
      //si tengo un ultimo usuario
      return lastUser.id + 1; //retorna el id del ultimo usuario + 1
    }
    return 1; //Si el archivo fuera un array vacio, le pongo 1 al id
  },

  buscarPorId: function (id) {
    //BUSCAR UN USUARIO A TRAVES DEL ID
     let allUsers = this.listaUsuarios();
     let userFound = allUsers.find((oneUser) => oneUser.id === id);
    //itera a todos los usuarios y me busca al usuario con id igual al id ingresado
    return userFound; // retorna al usuario encontrado
  },

  buscarPorCampo: function (field, text) {
    //QUE SE BUSQUE A UN USUARIO POR CUALQUIER CAMPO DE BUSQUEDA
    let allUsers = this.listaUsuarios();
    let userFound = allUsers.find((oneUser) => oneUser[field] === text);
    //al ser find, me devuelve solo a un usuario (ej: si busco por "country" me va a devolver solo al primero que cumpla
    //con el parametro, no a todos)
    return userFound;
    //console.log(User.findByField('email, "emailquebusco"))
  },

    crearUsuario: function (userData) {
    //GUARDAR AL USUARIO EN LA BASE DE DATOS
     let allUsers = this.listaUsuarios();
    let newUser = {
      id: this.generarId(), //De este objeto literal(User)el metodo para generar un id
      ...userData, //toda la info que me llego del objeto literal userData
    };
    allUsers.push(newUser); //pusheo a mi nuevo usuario al array de todos los usuarios
  fs.writeFileSync(
    path.join(__dirname, "../data/users.json"),
    JSON.stringify(allUsers, null, " "),
    "utf-8"
  );
    //Vuelvo a reescribir el archivo JSON
     return newUser;
    //console.log(User.create([fullName: "Javi", email:"javi@gmail.com"]))
  },
 
  borrar: function (id) {
    //identifico al usuario a eliminar por el id
     let allUsers = this.listaUsuarios();
    let finalUsers = allUsers.filter((oneUser) => oneUser.id !== id);
    //Me devuelve a todos los usuarios menos al que tiene el ID que le coloco
   this.guardarJSON(finalUsers);
    return true;
  },
};

 /*  console.log(User.crearUsuario({
    nombre: "carlos",
    appellido: "bauer"
  }))  */
module.exports = User;
