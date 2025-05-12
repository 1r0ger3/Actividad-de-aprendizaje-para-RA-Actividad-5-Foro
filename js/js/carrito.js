const carritoContainer = document.getElementById('carrito-container');
const totalContainer = document.getElementById('total');
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function mostrarCarrito() {
  carritoContainer.innerHTML = '';
  let total = 0;

  carrito.forEach((producto, index) => {
    const item = document.createElement('div');
    item.classList.add('producto');
    item.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>$${producto.precio}</p>
      <button onclick="eliminarProducto(${index})" class="btn">Eliminar</button>
    `;
    carritoContainer.appendChild(item);
    total += producto.precio;
  });

  totalContainer.innerHTML = `<h3>Total: $${total}</h3>`;
}

function eliminarProducto(index) {
  carrito.splice(index, 1);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  mostrarCarrito();
}

document.getElementById('vaciar-carrito').addEventListener('click', () => {
  carrito = [];
  localStorage.setItem('carrito', JSON.stringify(carrito));
  mostrarCarrito();
});

mostrarCarrito();
