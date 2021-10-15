const $ = id =>document.querySelector(id);
let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;



window.addEventListener('load', (e) => {
    console.log('registerValidator connected success');

    e.preventDefault()

let email = $("#inputEmail")
email.addEventListener("blur", () => {
    if (!email.value.trim()) {
        email.classList.add("is-invalid");
        $(".errorEmail").innerHTML = "No olvides dejarnos tu email";
      }
else if(!regExEmail.test(email.value)){
    email.classList.add('is-invalid')
    $('.errorEmail').innerHTML = "Debes ingresar un email válido"
} else {
   email.classList.remove("is-invalid");
   email.classList.add("is-valid");
    $(".errorEmail").innerHTML = null;
  }
});
let nombre = $("#nombre")
nombre.addEventListener("blur", () => {
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

let genero = $("#genero")
genero.addEventListener("blur", () => {
  if (!genero.value.trim()) {
  genero.classList.add("is-invalid");
    $(".errorGenero").innerHTML = "Queremos saber como te identificas";
  } else {
    genero.classList.remove("is-invalid");
    genero.classList.add("is-valid");
    $(".errorGenero").innerHTML = null;
  }
});



 let mensaje = $("#inputPaswor");
 mensaje.addEventListener("blur", () => {
    if (!mensaje.value.trim()) {
        mensaje.classList.add("is-invalid");
          $(".errorDescripcion").innerHTML = "Contanos algo porfa!!!!";
        }
  else if (mensaje.value.length<15) {
     mensaje.classList.add("is-invalid");
     $(".errorDescripcion").innerHTML = "Por favor contanos algo más";
   } else {
    mensaje.classList.remove("is-invalid");
    mensaje.classList.add("is-valid");
     $(".errorDescripcion").innerHTML = "";
   }
 });


})
