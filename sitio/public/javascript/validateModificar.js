let nombre = document.querySelector("#nombreProducto")
let imagen = document.querySelector("#imagenProducto")
let precio = document.querySelector("#precioProducto")
let desc = document.querySelector("#descuento")
let descripcion = document.querySelector("#descripcion")
console.log("hola mama")



// validaciones 

nombre.addEventListener("blur", () => {
    if (!nombre.value.trim()) {
    nombre.classList.add("is-invalid");
      document.querySelector(".errorName").innerHTML = "Debe colocar un nombre";
    } else if(nombre.value.length<4){
       nombre.classList.add("is-invalid");
       document.querySelector(".errorName").innerHTML = "Debe ser mayor a 4 letras";
     } else {
      nombre.classList.remove("is-invalid");
      nombre.classList.add("is-valid");
      document.querySelector(".errorName").innerHTML = null;
    }
  });

  imagen.addEventListener("focus", () => {
    document.querySelector(".errorImagen").innerHTML =
      "Las extensiones aceptadas son: .jpg, .npg, .img";
  });
  
  imagen.addEventListener("blur", () => {
    if (!imagen.value.trim()) {
      imagen.classList.add("is-invalid");
      document.querySelector(".errorImagen").innerHTML = "Debes subir al menos una imagen";
    } else {
      imagen.classList.remove("is-invalid");
      imagen.classList.add("is-valid");
      document.querySelector(".errorImagen").innerHTML = null;
    }
  });
   precio.addEventListener("blur", () => {
       if (!precio.value.trim()) {
    precio.classList.add("is-invalid");
    document.querySelector(".errorPrecio").innerHTML = "Pensas regalar este producto? Ponele Precio!";
       }else if (precio.value <=100) {
       precio.classList.add("is-invalid");
       document.querySelector(".errorPrecio").innerHTML = "Debes ingresar un precio mayor a 100";
     } else {
       precio.classList.remove("is-invalid");
       precio.classList.add("is-valid");
       document.querySelector(".errorPrecio").innerHTML = "";
     }
   });
  
   desc.addEventListener("blur", () => {
     if (desc.value >50) {
       desc.classList.add("is-invalid");
       document.querySelector(".errorDesc").innerHTML = "El descuento no puede ser mayor a 50%";
     } else {
      desc.classList.remove("is-invalid");
      desc.classList.add("is-valid");
       document.querySelector(".errorDesc").innerHTML = "";
     }
   });
   descripcion.addEventListener("blur", () => {
     if (descripcion.value.length<10) {
       descripcion.classList.add("is-invalid");
       document.querySelector(".errorDescripcion").innerHTML = "Por favor amplia tu descripcion";
     } else {
       descripcion.classList.remove("is-invalid");
       descripcion.classList.add("is-valid");
       document.querySelector(".errorDescripcion").innerHTML = "";
     }
   });
  


