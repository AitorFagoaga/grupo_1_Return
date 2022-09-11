
    function productosEnElCarrito() {
      if (localStorage.carrito) {
        return JSON.parse(localStorage.carrito).length;
      } else {
        return 0;
      }
    }
    /* Selecciono todos los productos de la página */
    let productos = document.querySelectorAll(".agregar_carrito");
    const cartNumber = document.querySelector(".cart-number");
    cartNumber.innerText = productosEnElCarrito();

    /* Creo un event listener por cada boton */
    productos.forEach((producto) => {
      
      producto.addEventListener("click", function (e) {
        
        if (localStorage.carrito) {
          let carrito = JSON.parse(localStorage.carrito);
          let index = carrito.findIndex((prod) => prod.id == e.target.dataset.id);
          if (index != -1) {
            carrito[index].quantity ++;
          } else {
            carrito.push({ id: e.target.dataset.id, quantity: 1 });
          }
          localStorage.setItem("carrito", JSON.stringify(carrito));
        } else { localStorage.setItem("carrito",JSON.stringify([{ id: e.target.dataset.id, quantity: 1 }])
          );
        }
        
        alert('Producto agregado al carrito correctamente!')
  
      });
      
    });
  
    cartNumber.innerText = productosEnElCarrito();
    // /* Numero del carrito */
