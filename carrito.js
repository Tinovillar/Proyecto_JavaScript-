class Carrito {
  cartContainer = [];
  li__contador = document.getElementsByClassName("li__contador");
  btnAddToCart = document.getElementById("addToCart");
  carrito__pedidos = document.getElementsByClassName("carrito__pedidos");
  total = document.getElementsByClassName("carrito__total");
  precioTotal = 0;

// LOCAL STORAGE
  cartSetLocalStorage(){
    localStorage.setItem("carrito", JSON.stringify(cartContainer));
  }
  cartGetLocalStorage(){
    localStorage.getItem("carrito", JSON.parse(cartContainer));
  }
//------------------------------------------------------------- 

// CART NAV
  addToCartNav(){
    cartContainer.push(burgerInfo);
    this.cartSetLocalStorage;
    this.addToCart;
    this.updateCart;
    this.totalPrice;
  }
  deleteToCartNav(){
    /*agregar un submenu al carrito nav y agregar un btn para sacar
    el pedido*/
  }
  removeAllToCartNav(){
    this.removeAllToCart;
    this.updateCart;
    this.totalPrice;
  }
//-------------------------------------------------------------

// ACTUALIZAR CARRITO 
  updateCart(){
    total[0].innerHTML = `Total: $${precioTotal}`;
    carrito__pedidos[0].innerHTML = pedidos;
    li__contador[0].innerHTML = this.cartContainer.length;
  }
//-------------------------------------------------------------

// PEDIDOS CARRITO
  addToCart(){
    let pedidos = "";
    if (localStorage.cartContainer != undefined){
      this.cartGetLocalStorage;
      for(let i in cartContainer){
      pedidos += `
      <div class="pedidos__pedido">
      <h3 class="pedido__title">${burgerInfo.nombre}</h3>
      <p class="pedido__descripcion">${burgerInfo.ingredientes}</p>
      <input type="number" id="cantidad" name="cantidad" min="0" max="10" value="1">
      <p class="pedido__precio">$${burgerInfo.precio}</p>
      </div>
      `
      }
    }    
  }
  deleteToCart(){
    // Agregar btn a los pedidos del carrito para elimiinar uno en especifico
  }
  removeAllToCart(){
    cartContainer = [];
    precioTotal = 0;
    this.cartSetLocalStorage;
  }
  totalPrice(){
    this.cartGetLocalStorage.forEach(burgerPrecio => {
      let precioEach = burgerInfo.precio;
      cantidad = document.getElementById("cantidad");
      if(cantidad > 1){
        precioEach = burgerInfo.precio * cantidad;
      }
      precioTotal += precioEach;
    })
    this.updateCart;
  }
//-------------------------------------------------------------
}