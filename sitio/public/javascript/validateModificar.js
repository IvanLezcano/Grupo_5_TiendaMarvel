let nombre = document.querySelector("#nombreProducto")





// validaciones 

nombre.addEventListener("focus", () => {
    if (!nombre.value.trim()) {
    nombre.classList.add("is-invalid");
      $(".errorName").innerHTML = "Debe colocar un nombre";
    } else if(nombre.value.length<4){
       nombre.classList.add("is-invalid");
       $(".errorName").innerHTML = "Debe ser mayor a 4 letras";
     } else {
      nombre.classList.remove("is-invalid");
      nombre.classList.add("is-valid");
      $(".errorName").innerHTML = null;
    }
  });




