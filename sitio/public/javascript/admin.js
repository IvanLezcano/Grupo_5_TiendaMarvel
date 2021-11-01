console.log('admin conneted success')
const $ = (id) => document.querySelector(id);
const $1 = (id) =>document.getElementById(id);
const query =new URLSearchParams(location.search);

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
$('.ropa').addEventListener("click", () =>{
    ropa()
})
$('.mercha').addEventListener("click", () =>{
    mercha()
})
$('.figuras').addEventListener("click", () =>{
    figuras()
})
$('.comics').addEventListener("click", () =>{
    comics()
})




const listado = async () => {

    try {
        let response = await fetch('/api/products');
        let result = await response.json();
        console.log(result.data);
        result.data.forEach(product => {
           addItem(product);
           console.log(document.querySelector('.borrar'))
        });
        let borrar = document.querySelectorAll('.borrar')
        
        borrar.forEach(e => e.addEventListener("click",(event)=>{
            let formulario = document.querySelector('.eliminar')
            console.log(formulario);
            let respuesta = confirm("Seguro que lo queres borrar?");
            if (!respuesta) {
                event.preventDefault()
            return false;
            }else {
                alert("El producto ah sido completamente eliminado del inventario que poseemos actualmente");
            formulario.submit()
            
            }
            
        }))

    } catch (error) {
        console.log(error)
    }

}
/* loadProduct(list) */


const addItem = product => {
    console.log(product.id);
    let item = `
    <tr style="width:10px; height:10px">
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
                <button class="btn btn-sm btn-lg-sm btn-danger borrar" type="submit">
                <i class="fas fa-trash-alt"></i>
                </button>
            </form>
        </div>
        </td>
    </tr>
    `;
    return $('#table-products').innerHTML += item;
}

const addItemCategory = product => {
  let item = `
  <tr style="width:10px; height:15px">
      <th scope="row">${product.id} </th>
      <td scope="row" style="width:10px; height:10px"> <img src="/images/merchandising/${product.image}" class="img-fluid" alt="">  </td>
      <td>${product.title} </td>
      <td>${product.price} </td>
      <td></td>
      <td ">
          <a class="btn btn-sm btn-success"
          href="/productos/modificar/${product.id}"><i class="fas fa-edit"></i></a>
      <div>
          <form id="eliminar" class="eliminar" action="/productos/borrar/${product.id}?_method=DELETE"
              method="POST">
              <button class="btn btn-sm  btn-danger borrar"
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

      if(result.meta.total > 0){

        result.data.forEach((product)=>{
          addItem(product);
          $(".productos").innerHTML = `<p><b>Productos encontrados para la busqueda ${keywords}: ${result.meta.total}</b></p>`;
        })
      }else{
         $(".productos").innerHTML = `<p><b>No hay resultados para la busqueda: ${keywords}</b></p>`;
      }
    }catch (error) {
   console.log(error);
 }
};

  async function ropa() {
    $("#table-products").innerHTML="";
   try {
     let response = await fetch("/api/products/categories/ropa")
     let result = await response.json();
     console.log(result);

     result.data.products.forEach(product => {
     
     addItemCategory(product);
      
     });
   } catch (error) {
     console.log(error);
   }
 }; 

 async function mercha() {
  $("#table-products").innerHTML="";
 try {
   let response = await fetch("/api/products/categories/mercha")
   let result = await response.json();
   console.log(result);

   result.data.products.forEach(product => {
   
   addItemCategory(product);
    
   });
 } catch (error) {
   console.log(error);
 }
}; 

async function figuras() {
  $("#table-products").innerHTML="";
 try {
   let response = await fetch("/api/products/categories/figuras")
   let result = await response.json();
   console.log(result);

   result.data.products.forEach(product => {
   
   addItemCategory(product);
    
   });
 } catch (error) {
   console.log(error);
 }
}; 

async function comics() {
  $("#table-products").innerHTML="";
 try {
   let response = await fetch("/api/products/categories/comics")
   let result = await response.json();
   console.log(result);

   result.data.products.forEach(product => {
   
   addItemCategory(product);
    
   });
 } catch (error) {
   console.log(error);
 }
}; 


   

      
