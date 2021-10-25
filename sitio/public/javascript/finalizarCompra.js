console.log('hola mundo');

let contenedor= document.querySelector('.contenedor')

let productos= localStorage.getItem('producto')
productos= JSON.parse(productos)

productos.forEach(producto => {
    console.log(producto);
});

productos.map(producto => {
    
    contenedor.innerHTML = `
     <article class="carrito-main-article">
                            <div class="carrito-main-producto">
                                <div class="carrito-main-producto-imagen"><img src="/images/merchandising/${producto.imagen}" alt=""></div>
                                <div class="carrito-main-producto-descripcion">
                                    <div>

                                        <p id="nombrecito">${producto.nombre} </p>
                                        <p>Entregado por Torre Marvel</p>
                                        <p></p>
                                    </div>
                                    <!-- <div>
                                    <p><a href="">Eliminar producto</a> </p>
                                </div> -->
                                </div>
                            </div>
                            <div class="carrito-main-article-precio">
                                <div class="carrito-main-article-precio-subrayado">
                                    <p>Precio unitario:</p>
                                    <Span class="precioUnitario">$ ${producto.precio}</Span>
                                </div>
                            </div>
                        </article>



                        <section class="carrito-facturacion">
                            <div class="carrito-facturacion-tarjetas">
                                <!--  <div class="carrito-facturacion-tarjetas-descuento">
                                <h3>Codigo de descuento</h3>
                                <form action=""><input type="text" placeholder="Ingrese codigo"></form>
                            </div> -->
                                <div class="carrito-facturacion-tarjetas-descuento-imagen">
                                    <img src="/images/tarjetas.PNG" alt="">
                                </div>
                            </div>

                            <div class="carrito-facturacion-cobro">
                                <div class="carrito-facturacion-cobro-subtotal">
                                    <p>Subtotal</p>
                                    <span class="subTotal">$ ${producto.precio}</span>
                                </div>
                                <div class="carrito-facturacion-cobro-total-general">
                                    <div class="carrito-facturacion-cobro-total-general-i">
                                        <span class="carrito-facturacion-cobro-total-general-i-precio">Total</span>
                                        <span class="total">$ ${producto.total}</span>
                                    </div>
                                </div>
                           </div>

    `;
});
