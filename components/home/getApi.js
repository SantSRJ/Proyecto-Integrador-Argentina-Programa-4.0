// Generar el HTML para cada producto
function generarProductoHTML(producto) {
  return `
    <div class="producto">
      <p class="title">${producto.title}</p>
      <img src="${producto.image}" alt="${producto.title}" id="miImagen">
      <div id="miModal" class="modal">
        <span class="close">&times;</span>
        <img class="modal-content" src="${producto.image}" alt="${producto.title}"></href=>
      </div>
      <p class="title">ID: ${producto.id}</p>
      <p class="title-url"><a href="${producto.sourceUrl}" target="_blank">Enlace</a></p>
    </div>
  `;
};
// Generar los botones de paginación
function generarBotonesPaginacion(numPaginas, paginaActual) {
  const botones = document.createElement("div");
  // Botón "Anterior"
  const botonAnterior = document.createElement("button");
  botonAnterior.innerText = "Anterior";
  botonAnterior.disabled = paginaActual === 1;
  botonAnterior.addEventListener("click", () => {
    mostrarPagina(paginaActual - 1);
  });
  botones.appendChild(botonAnterior);
  // Números de página
  const maxBotones = 4;
  const inicio =
    paginaActual <= 2 ? 1 : paginaActual >= numPaginas - 1 ? numPaginas - maxBotones + 1 : paginaActual - 1;
  const fin = Math.min(inicio + maxBotones, numPaginas);
  for (let i = inicio; i <= fin; i++) {
    const botonPagina = document.createElement("button");
    botonPagina.innerText = i;
    botonPagina.disabled = i === paginaActual;
    botonPagina.addEventListener("click", () => {
      mostrarPagina(i);
    });
    botones.appendChild(botonPagina);
  };
  // Botón "Siguiente"
  const botonSiguiente = document.createElement("button");
  botonSiguiente.innerText = "Siguiente";
  botonSiguiente.disabled = paginaActual === numPaginas;
  botonSiguiente.addEventListener("click", () => {
    mostrarPagina(paginaActual + 1);
  });
  botones.appendChild(botonSiguiente);
  return botones;
};
// Ordenar productos por nombre
function ordenarProductosPorNombre(productos, ordenAscendente) {
  const orden = ordenAscendente ? 1 : -1;
  return productos.sort((a, b) => {
    const nombreA = a.title.toLowerCase();
    const nombreB = b.title.toLowerCase();
    if (nombreA < nombreB) {
      return -1 * orden;
    } else if (nombreA > nombreB) {
      return 1 * orden;
    } else {
      return 0;
    }
  });
}
// Mostrar la página actual de productos
function mostrarPagina(pagina) {
  fetch("./recetas.json")
  .then((response) => response.json())
  .then((productos) => {  
    // Calcular el rango de productos a mostrar
    const productosPorPagina = 3;
    const inicio = (pagina - 1) * productosPorPagina;
    const fin = inicio + productosPorPagina;
    const productosPagina = productos.slice(inicio, fin);
    // Ordenar los productos por nombre (ascendente)
    const productosOrdenados = ordenarProductosPorNombre(productosPagina, true);
    // Generar el HTML para cada producto y agregarlo a la página web
    const listaProductosHTML = productosOrdenados
    .map((producto) => generarProductoHTML(producto))
    .join("");
    document.getElementById("lista-productos").innerHTML = listaProductosHTML;
    // Calcular el número total de páginas
    const numPaginas = Math.ceil(productos.length / productosPorPagina);   
    // Generar los botones de paginación
    const paginacion = generarBotonesPaginacion(numPaginas, pagina);
    document.getElementById("paginacion").innerHTML = "";
    document.getElementById("paginacion").appendChild(paginacion);
  })
  .catch((error) => console.error("Error al cargar los productos:", error));
}
// Mostrar la primera página de productos al cargar la página
mostrarPagina(1);

  // Realizar una llamada a la API
  /*"https://api.spoonacular.com/recipes/complexSearch?apiKey=1187ad473f7e4e349ccd2e5418e9a639&addRecipeInformation=true&number=5000"
  */
