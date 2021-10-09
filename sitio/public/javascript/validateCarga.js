
const $ = id =>document.querySelector(id);



window.addEventListener('load', (e) => {
    console.log('registerValidator connected success');
e.preventDefault()


let nombre = $("#nombreProducto")
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

let imagen = $("#imagenProducto");
imagen.addEventListener("focus", () => {
  $(".errorImagen").innerHTML =
    "Las extensiones aceptadas son: .jpg, .npg, .img";
});

imagen.addEventListener("blur", () => {
  if (!imagen.value.trim()) {
    imagen.classList.add("is-invalid");
    $(".errorImagen").innerHTML = "Debes subir al menos una imagen";
  } else {
    imagen.classList.remove("is-invalid");
    imagen.classList.add("is-valid");
    $(".errorImagen").innerHTML = null;
  }
});
let precio= $("#precioProducto")
 precio.addEventListener("blur", () => {
     if (!precio.value.trim()) {
  precio.classList.add("is-invalid");
    $(".errorPrecio").innerHTML = "Pensas regalar este producto? Ponele Precio!";
     }else if (precio.value <=100) {
     precio.classList.add("is-invalid");
     $(".errorPrecio").innerHTML = "Debes ingresar un precio mayor a 100";
   } else {
     precio.classList.remove("is-invalid");
     precio.classList.add("is-valid");
     $(".errorPrecio").innerHTML = "";
   }
 });

 let desc= $("#descuento")
 desc.addEventListener("blur", () => {
   if (desc.value >50) {
     desc.classList.add("is-invalid");
     $(".errorDesc").innerHTML = "El descuento no puede ser mayor a 50%";
   } else {
    desc.classList.remove("is-invalid");
    desc.classList.add("is-valid");
     $(".errorDesc").innerHTML = "";
   }
 });
 let descripcion = $("#descripcion");
 descripcion.addEventListener("blur", () => {
   if (descripcion.value.length<10) {
     descripcion.classList.add("is-invalid");
     $(".errorDescripcion").innerHTML = "Por favor amplia tu descripcion";
   } else {
     descripcion.classList.remove("is-invalid");
     descripcion.classList.add("is-valid");
     $(".errorDescripcion").innerHTML = "";
   }
 });

})