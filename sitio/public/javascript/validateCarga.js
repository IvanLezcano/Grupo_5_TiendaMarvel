
const $ = id =>document.querySelector(id);


let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;


window.addEventListener('load', (e) => {
    console.log('registerValidator connected success');
e.preventDefault()

let imagen = $("#imagenProducto")
imagen.addEventListener("focus", () => {
  $(".errorImagen").innerHTML =
    "Las extensiones aceptadas son: .jpg, .npg, .img";
});
let nombre = $("#nombreProducto")
nombre.addEventListener("blur", () => {
  if (!nombre.value.trim()) {
  nombre.classList.add("is-invalid");
    $(".errorName").innerHTML = "El nombre es obligatorio";
  } else {
    nombre.classList.remove("is-invalid");
    nombre.classList.add("is-valid");
    $(".errorName").innerHTML = null;
  }
});

 $("email").addEventListener("blur", () => {
   if (!regExEmail.test($("email").value)) {
     $("email").classList.add("is-invalid");
     $("error-email").innerHTML = "Debes ingresar un email válido";
   } else {
     $("email").classList.remove("is-invalid");
     $("email").classList.add("is-valid");
     $("error-email").innerHTML = null;
   }
 });


 

})