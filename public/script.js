const submitBtn = document.getElementById('submitBtn');
const outputDiv = document.getElementById('output');
const ingredientesUsuario=[];
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

// Agrega un listener al botón de submit para que cuando se haga click se envíe el nombre ingresado al servidor
submitBtn.addEventListener('click', () => {
fetch('/obtenerRecetas', { // Envía el nombre ingresado al servidor mediante una petición POST
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ ordenar }) // El nombre se envía en el body de la petición
}) // Luego de enviar la petición, se espera a que el servidor responda
  .then(response => response.json()) // Se convierte la respuesta a JSON
  .then(data => { // Si la conversión fue exitosa, se obtiene el saludo y se muestra en pantalla
    outputDiv.textContent = data.ordenar;
  })
  .catch(error => { // Si hubo un error, se muestra en consola
    console.error('Error:', error);
  });
})
