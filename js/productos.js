const productos = [
  { id: 1, nombre: 'Camiseta', precio: 25, imagen: 'img/camiseta.jpg' },
  { id: 2, nombre: 'Gorra', precio: 15, imagen: 'img/gorra.jpg' },
  { id: 3, nombre: 'Tenis', precio: 55, imagen: 'img/tenis.jpg' },
];

const contenedor = document.getElementById('productos-container');

productos.forEach(producto => {
  const card = document.createElement('div');
  card.classList.add('producto');
  card.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <p>$${producto.precio}</p>
    <button onclick="agregarCarrito(${producto.id})" class="btn">Agregar</button>
  `;
  contenedor.appendChild(card);
});

function agregarCarrito(id) {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  alert('Producto agregado al carrito');
}
