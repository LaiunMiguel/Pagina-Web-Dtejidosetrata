let paginaActual = 1;
let paginaMaxima;
const productosPorPagina = 9;
let inicio = 0;
let fin = 9;



function paginaAnterior(){
    if (paginaActual > 1 ){
        paginaActual--;
        inicio = (paginaActual - 1) * productosPorPagina
        fin    = inicio + productosPorPagina;
        cargarPagina();
    }
}

function paginaSiguiente(){
        if(paginaActual < paginaMaxima){
            paginaActual++;
            inicio += productosPorPagina;
            fin    += 1 + productosPorPagina;
            cargarPagina();
        }
    
}

async function cargarPagina() {

    try {
      // Hacemos fetch del archivo JSON
      const respuesta = await fetch('../data/productos.json');
      
      // Verificamos si la respuesta es exitosa
      if (!respuesta.ok) {
          throw new Error(`Error al cargar productos: ${respuesta.statusText}`);
      }

      // Parseamos la respuesta como JSON
      const productos = await respuesta.json();
      paginaMaxima = Math.ceil(productos.length / productosPorPagina);

      // Mostramos solo los productos que están en la página actual
      const productosAPresentar = productos.slice(inicio, fin);
      
      // Llamamos a la función para renderizar los productos en la página
      renderizarProductos(productosAPresentar);
      
  } catch (error) {
      console.error("Error al cargar los productos:", error);
  }
}

function renderizarProductos(productos) {
    const contenedor = document.getElementById('productosContainer');
    contenedor.innerHTML = ''; // Limpia el contenedor

    productos.forEach(producto => {
      const productoDiv = document.createElement('div');
      productoDiv.classList.add('productosPresentacion'); // Agrega la clase
  
      productoDiv.innerHTML = `
          <a href="../enlaces/prod.html#id=${producto.id}&nombre=${producto.nombre}">
            <div class = "cartaPresentacion">
              <div>
              <img src="${producto.imagen}" alt="${producto.nombre}" class="imagenMuestra">
              </div>
              <div class="titulo">${producto.nombre}</div>
            </div>
          </a>
      `;
  
      // Asumiendo que tienes un contenedor para los productos
      document.getElementById('productosContainer').appendChild(productoDiv);
  });
 
}
cargarPagina();
