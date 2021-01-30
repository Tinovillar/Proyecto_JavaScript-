class Carrito {
  cartContainer = [];
  li__contador = document.getElementsByClassName("li__contador");
  btnAddToCart = document.getElementById("addToCart");
  carrito__pedidos = document.getElementsByClassName("carrito__pedidos");
  total = document.getElementsByClassName("carrito__total");
  precioTotal = 0;

// Local Storage
  cartSetLocalStorage(){
    localStorage.setItem("carrito", JSON.stringify(cartContainer));
  }
  cartGetLocalStorage(){
    localStorage.getItem("carrito", JSON.parse(cartContainer));
  }
// 

// Cart Nav 
  addToCartNav(){
    cartContainer.push(burgerInfo);
    this.cartSetLocalStorage;
    this.updateCart;
  }
  deleteToCartNav(){
    /*agregar un submenu al carrito nav y agregar un btn para sacar
    el pedido*/
  }
  removeAllToCartNav(){
    cartContainer = [];
    this.cartSetLocalStorage;
    this.updateCart;
  }
//

// Actualizar Carrito 
  updateCart(){
    total[0].innerHTML = `Total: $${precioTotal}`;
    carrito__pedidos[0].innerHTML = pedidos;
    li__contador[0].innerHTML = this.cartContainer.length;
  }
//

// Pedidos Carrito
  addToCart(){
    let pedidos = "";
    
  }
  deleteToCart(){
    
  }
  removeAllToCart(){

  }
  multiplier(){

  }
// 

}