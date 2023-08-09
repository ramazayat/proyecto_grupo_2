const submitBtn = document.getElementById('submitBtn');
const outputDiv = document.getElementById('output');
const ingredientesUsuario=[];
const listaRecetas = [bizcocho,tortillaPapa,galletitasManteca,purePapa];
function ingrediente_click(idIngrediente){
  // Obtener el checkbox por su id
  var checkbox = document.getElementById(idIngrediente);

  // Verificar el estado del checkbox
  if (checkbox.checked) {
    // Checkbox marcado: agregar elemento al arreglo
    ingredientesUsuario.push(idIngrediente);
    console.log(ingredientesUsuario);
  } else {
    // Checkbox desmarcado: remover elemento del arreglo
    var index = ingredientesUsuario.indexOf(idIngrediente);
    if (index > -1) {
      ingredientesUsuario.splice(index, 1);
      console.log(ingredientesUsuario);
    }
  }
}

function borrarIngredientes(){
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  ingredientesUsuario.length=0;
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = false;
  });
  ingredientesUsuario.length = 0;
}

// Agrega un listener al botón de submit para que cuando se haga click se envíe el nombre ingresado al servidor
submitBtn.addEventListener('click', () => {
  fetch('/obtenerRecetas', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ ingredientesUsuario }) // Los ingredientes del usuario se envía en el body de la petición
}) // Luego de enviar la petición, se espera a que el servidor responda
  .then(response => response.json()) // Se convierte la respuesta a JSON
  .then(data => { // Si la conversión fue exitosa, se muestra en pantalla
    outputDiv.textContent = "";
    for(let i = 0; i<listaRecetas.length; i++){
      outputDiv.textContent += data.recetas[i].nombre; //HAY QUE HACER UN FOR PARA QUE RECORRA TODAS LAS RECETAS
    }
    /*$("#output").html("")
    for(let receta of recetas){
      let recetaTexto=""
      vedetexto+="<div class>" + recetas.nombre
      recetastext+="</div>"
      $("#output").oppend(recetaTexto) 
    }*/
  })
  .catch(error => { // Si hubo un error, se muestra en consola
    console.error('Error:', error);
  });
  })
