console.log('admin conneted success')
const $ = (id) => document.querySelector(id);

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

/* loadProduct(list) */


const addItem = product => {
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
                <button class="btn btn-sm btn-lg-sm btn-danger borrar"
                    type='submit'onclick="confirmacion(e,document.querySelector("#eliminar"))><i class="fas fa-trash-alt"></i></button>
            </form>
        </div>
        </td>
    </tr>
    `;
    return $('#table-products').innerHTML += item;
}


    let formulario = document.querySelector(".eliminar")
    

     /*  $(".borrar").addEventListener("click", (e,formulario) =>{
        e.preventDefault()
      
      let respuesta = confirm("Seguro que lo queres borrar?");
      if (!respuesta) {
      return false;
    }else {
        alert("El producto ah sido completamente eliminado del inventario que poseemos actualmente");
      formulario.submit()
    }
}) */
      
    let confirmacion = (e,formulario) =>{ 
      e.preventDefault()
      
      let respuesta = confirm("Seguro que lo queres borrar?");
      if (!respuesta) {
      return false;
    }else {
        alert("El producto ah sido completamente eliminado del inventario que poseemos actualmente");
      formulario.submit()}}
   

/* const goPage = async (event,current,limit,initial,next) => {
    event.preventDefault();
    $('table-products').innerHTML = null;
    $('box-paginator').innerHTML = null;

    try {
        let response = await fetch(`/api/products?current=${current}&limit=${limit}`);
        let result = await response.json();
        result.data.forEach(product => {
            addItem(product)
        });
        paginator(result.meta.total,limit,6,current,initial,next)

    } catch (error) {
        console.log(error)
    }
}

goPagesNext = (event,total,limit,show,current,initial,next) => {
    event.preventDefault();
    current = current + show;
    initial = initial + show;
    next = next + show
    paginator(total,limit,show,current,initial,next)
    goPage(event,current,limit,initial,next)
}


function paginator(total, limit, show, current,initial,next){
    let pages = Math.ceil(total / limit)
    $('box-paginator').innerHTML = 
    `
        <li class="page-item">
            <a class="page-link me-1" href="#">
                <i class="fas fa-angle-left"></i>
            </a>
        </li>
        <li class="page-item">
            <a class="page-link" href="#">
                <i class="fas fa-angle-double-left"></i>
            </a>
        </li>
    `
    for (let i = initial; i < initial + show; i++) {
        $('box-paginator').innerHTML += 
        `
            <li class="page-item ${current == i ? 'active' : null}" onclick="goPage(event, ${i},${limit},${initial},${next})"><a class="page-link" href="#">${i}</a></li>
        `
    }
   
    $('box-paginator').innerHTML += 
    `
        <li class="page-item">
            <a class="page-link" href="#" onclick="goPagesNext(event,${total},${limit},${show},${current},${initial},${next})">
                <i class="fas fa-angle-double-right"></i>
            </a>
        </li>
        <li class="page-item ms-1">
        <a class="page-link" href="#">
            <i class="fas fa-angle-right"></i>
        </a>
    </li>
    ` 
}*/