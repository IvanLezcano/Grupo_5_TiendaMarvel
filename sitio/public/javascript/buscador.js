const $1 = (id) => document.getElementById(id);


$1("buttonHome").addEventListener("click", (e) => {
     e.preventDefault();
if($1("inputSearch").value!==""){
    $1("formHome").submit()
}else{
    $1("mensajebusqueda").innerHTML='<p class="text-danger">Por favor ingresa una palabra para la búsqueda<p>'
}
}) 



