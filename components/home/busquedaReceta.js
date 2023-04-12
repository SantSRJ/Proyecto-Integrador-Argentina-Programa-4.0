function generarProductoHTML(producto) {
    return `
      <div class="productos">
        <p class="title">${producto.title}</p>
        <img src="${producto.image}" alt="${producto.title}" id="miImagen">
        <p class="title">ID: ${producto.id}</p>
        <p class="title-url"><a href="${producto.sourceUrl}" target="_blank">Enlace</a></p>
      </div>
    `;
  };

  function buscarElementos() {
    var busquedaInput = document.getElementById('busqueda-input');
    var busqueda = busquedaInput.value.toLowerCase();
  
    // Verificar si la búsqueda es nula y salir de la función si lo es
    if (!busqueda) {
      return;
    }
    
    fetch('recetas.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // Buscar los elementos que contengan el criterio de búsqueda
        var elementosEncontrados = data.filter(function(elemento) {
          return elemento.title.toLowerCase().includes(busqueda);
        });
  
        // Mostrar los elementos encontrados en la primera página
        var elementosContainer = document.getElementById('elementos-container');
        elementosContainer.innerHTML = '';
  
        elementosEncontrados.forEach(function(elemento) {
          var productoHTML = generarProductoHTML(elemento);
          var botonPDF = document.createElement('button');
          botonPDF.className = "button-pdf";
          botonPDF.innerText = 'Descargar PDF';
          botonPDF.addEventListener('click', function() {
            generarPDF(elemento);
          });
          var productoContainer = document.createElement('div');
          productoContainer.classList.add('producto-container');
          productoContainer.innerHTML = productoHTML;
          productoContainer.appendChild(botonPDF);
          elementosContainer.appendChild(productoContainer);
        });
      });
  }
  
  function generarPDF(producto) {
    var doc = new jsPDF();
    var texto = `
      Título: ${producto.title}
      ID: ${producto.id}
      Enlace: ${producto.sourceUrl}
    `;
  
    doc.text(10, 10, texto);
    doc.save(`${producto.title}.pdf`);
  }