var modal = document.getElementById("miModal");
var img = document.getElementById("miImagen");
var span = document.getElementsByClassName("close")[0];

img.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Generar el HTML para cada producto
function generarProductoHTML(producto) {
    return `
      <div class="producto">
        <p class="title">"${producto.title}"</p>
        <img src="${producto.image}" alt="${producto.title}">
        <p class="title">ID: "${producto.id}"</p>
        <p class="title-url">Enlace: <a href="${producto.sourceUrl}" target="_blank">${producto.sourceUrl}</a></p>
        <p>Vegetarian: ${producto.vegetarian}</p>
        <p>Vegan: ${producto.vegan}</p>
        <p>Free of gluten: ${producto.glutenFree}</p>
        <p>Dairyfree: ${producto.dairyFree}</p>
        <p>Very healthy: ${producto.veryHealthy}</p>
        <p>Cheap: ${producto.cheap}</p>
        <p>Very popular: ${producto.veryPopular}</p>
        <p>Sustainable: ${producto.sustainable}</p>
        <p>Low fod map: ${producto.lowFodmap}</p>
        <p>Weight Watcher Smart Points: ${producto.weightWatcherSmartPoints}</p>
        <p>Gaps: ${producto.gaps}</p>
        <p>Preparation minutes: ${preparationMinutes}</p>
        <p>Cooking minutes: ${producto.cookingMinutes}</p>
        <p>Aggregate likes: ${producto.aggregateLikes}</p>
        <p>Health score: ${producto.healthScore}</p>
        <p>Credits text: ${producto.creditsText}</p>
        <p>Sourcename: ${producto.sourceName}</p>
        <p>Price per serving: ${producto.pricePerServing}</p>
        <p>Ready in minutes: ${producto.readyInMinutes}</p>
        <p>Servings: ${producto.servings}</p>
        <p>Summary: ${producto.summary}</p>
        <p>Dish types: ${producto.dishTypes}</p>
        <p>Diets: ${producto.diets}</p>
        <p>Occasions: ${producto.occasions}</p>
        <p>Analyzed instructions: ${producto.analyzedInstructions}</p>
      </div>
    `;
  };