//Hola, tengo un problema con el boton de la pagina index.html, con el de agregar al carrito. Se me borra cuando cambio de pagina. Como lo puedo arreglar??

let li__contador = document.getElementsByClassName("li__contador");
let btnAddToCart = document.getElementById("addToCart");
let divCrear = document.getElementsByClassName("crear");
let carrito = [];
let carrito__pedidos = document.getElementsByClassName("carrito__pedidos")
let burger = {
  "nombre" : "Valentino amburguesa sin H",
  "ingredientes" : "uno, dos, tresssss",
  "precio" : 1000
};
let total = document.getElementsByClassName("carrito__total");
let precioTotal = 0;

function addToCart(){
  carrito.push(burger);
  localStorage.setItem("carrito", JSON.stringify.carrito);
  actualizarCarrito;
};

function actualizarCarrito(){
  let pedidos = "";
  if(localStorage.carrito != undefined){
    // carrito = JSON.parse(localStorage.carrito);
    for(let i in carrito){
      pedidos += `
      <div class="pedidos__pedido">
      <h3 class="pedido__title">${burger.nombre}</h3>
      <p class="pedido__descripcion">${burger.ingredientes}</p>
      <input type="number" id="cantidad" name="cantidad" min="0" max="10" value="1">
      <p class="pedido__precio">$${burger.precio}</p>
      </div>
      `

      precioTotal += burger.precio;
    }
  }
  total[0].innerHTML = `Total: $${precioTotal}`;
  carrito__pedidos[0].innerHTML = pedidos;
  li__contador[0].innerHTML = carrito.length;
};

function vaciarCarrito(){
  carrito = [];
  precioTotal = 0;
  localStorage.setItem("carrito", JSON.stringify.carrito);
  actualizarCarrito();
}

addToCart();
addToCart();
addToCart();

window.addEventListener("DOMContentLoaded", actualizarCarrito);