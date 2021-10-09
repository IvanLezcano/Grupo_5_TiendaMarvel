let nombre = document.querySelector("#nombreProducto")
let nameUser = document.querySelector("#validationCustom01")
let firstName = document.querySelector("#validationCustom02")
let lastName = document.querySelector("#validationCustom05")
let email = document.querySelector("#validationCustom03")
let password = document.querySelector("#validationCustom04")
let buttom = document.querySelector(".btn-registrarse")




// validaciones 

nombre.addEventListener("focus", () => {
    if (!nombre.value.trim()) {
    nombre.classList.add("is-invalid");
      $(".errorName").innerHTML = "El nombre es obligatorio";
    } else if(nombre.value.length<3){
       nombre.classList.add("is-invalid");
       $(".errorName").innerHTML = "El nombre debe tener al menos 3 letras";
     } else {
      nombre.classList.remove("is-invalid");
      nombre.classList.add("is-valid");
      $(".errorName").innerHTML = null;
    }
  });




