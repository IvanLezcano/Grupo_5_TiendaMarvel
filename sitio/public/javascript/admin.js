console.log('admin conneted success')
const $ = (id) => document.querySelector(id);

const $1 = (id) => document.getElementById(id);
const query = new URLSearchParams(location.search); //nos devuelve el query string

if ($1("form-search")) {
  $1("form-search").addEventListener("submit", (e) => {
    e.preventDefault();

    query.set("keywords", $1("input-search").value);
    history.replaceState({}, "", `${location.pathname}?${query}`);
    search(query.get("keywords")); //query.get nos toma la palbra ingresada por el buscador
  });
}


$('#table-products').innerHTML = null; //limpio el caja padre
$('.listar').addEventListener("click", () =>{
    listado()
})
$('.agregar').addEventListener("click", () =>{

})





const listado = async () => {

    try {
        let response = await fetch('/api/products');
        let result = await response.json();
        
        result.data.forEach(product => {
            let listado= addItem(product)
            console.log("lista productos");
        });
        
       

    } catch (error) {
        console.log(error)
    }

}




const addItem = product => {
    let item = `
    <tr style="width:10px; height:15px">
        <th scope="row">${product.id} </th>
        <td scope="row" style="width:10px; height:10px"> <img src="/images/merchandising/${product.image}" class="img-fluid" alt="">  </td>
        <td>${product.title} </td>
        <td>${product.price} </td>
        <td>${product.category.name} </td>
        <td class="d-flex justify-content-around">
            <a class="btn btn-sm btn-success"
            href="/productos/modificar/${product.id} "><i class="fas fa-edit"></i></a>
        <div>
            <form id="eliminar" class="eliminar" action="/productos/borrar/${product.id}?_method=DELETE"
                method="POST">
                <button class="btn btn-sm btn-lg-sm btn-danger borrar"
                    type='submit'><i class="fas fa-trash-alt"></i></button>
            </form>
        </div>
        </td>
    </tr>
    `;
    return $('#table-products').innerHTML += item;
}
async function search(keywords) {
    $("#table-products").innerHTML="";
    try {
      let response = await fetch("/api/products/search?keywords=" + keywords);
      let result = await response.json();
      console.log(result.data);

      if (result.meta.total > 0) { 
    
      result.data.forEach((product) => {
        addItem(product);
        console.log("lista productos");
      });
    } else {
   
        return ($("#table-products").innerHTML =`<p class="fs-2"><strong>No hay resultados para la búsqueda: "${keywords}"</strong></p>`);
     } 
    } 
    catch (error) {
     console.log(error);
    }
  };


   let boton = $(".borrar")
   console.log(boton);
    
    if(boton!== null){
        boton.addEventListener("click", (e) => {
          e.preventDefault();
          let formulario = document.querySelector(".eliminar");

          let respuesta = confirm("Seguro que lo queres borrar?");
          if (!respuesta) {
            return false;
          } else {
            alert(
              "El producto ah sido completamente eliminado del inventario que poseemos actualmente"
            );
            formulario.submit();
          }
        });

    }

      
      
  /*   let confirmacion = (e,formulario) =>{ 
      e.preventDefault()
      
      let respuesta = confirm("Seguro que lo queres borrar?");
      if (!respuesta) {
      return false;
    }else {
        alert("El producto ah sido completamente eliminado del inventario que poseemos actualmente");
      formulario.submit()}}
   
 */