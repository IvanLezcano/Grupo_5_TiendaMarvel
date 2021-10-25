console.log('hola mundo');

let contenedor= document.querySelector('.contenedor')
let spantotal= document.querySelector('.total')

let productos= localStorage.getItem('producto')
productos= JSON.parse(productos)

productos.forEach(producto => {
    console.log(producto);
});

var total= 0;
productos.forEach((producto) => {
  producto.forEach((item) => {
  
  total += item.total;
}); 
}); 
console.log(total);

 spanTotal.innerHTML += `$ ${total}`


productos.forEach((producto) => {
  producto.forEach((item) => {
      
    contenedor.innerHTML += `
     <article class="carrito-main-article">
                            <div class="carrito-main-producto">
                                <div class="carrito-main-producto-imagen"><img src="/images/merchandising/${item.imagen}" alt=""></div>
                                <div class="carrito-main-producto-descripcion">
                                    <div>

                                        <p id="nombrecito">${item.nombre} </p>
                                        <p>Entregado por Torre Marvel</p>
                                        <p>Cantidad ${item.cantidad}</p>
                                    </div>
                                   
                                </div>
                            </div>
                            <div class="carrito-main-article-precio">
                                <div class="carrito-main-article-precio-subrayado">
                                    <p>Precio unitario:</p>
                                    <Span class="precioUnitario">$ ${item.precio}</Span>
                                </div>
                                <div class="carrito-facturacion-cobro-subtotal">
                                    <p>Subtotal</p>
                                    <span class="subTotal">$ ${item.total}</span>
                                </div>
                            </div>
                        </article>



                        <section class="carrito-facturacion">
                            <div class="carrito-facturacion-tarjetas">
                                <div class="carrito-facturacion-tarjetas-descuento">
                                <h3>Codigo de descuento</h3>
                                <form action=""><input type="text" placeholder="Ingrese codigo"></form>
                            </div> 
                                <div class="carrito-facturacion-tarjetas-descuento-imagen">
                                    <img src="/images/tarjetas.PNG" alt="">
                                </div>
                            </div>

                            <div class="carrito-facturacion-cobro">
                                
                               
                           </div>

    `;
  });
})