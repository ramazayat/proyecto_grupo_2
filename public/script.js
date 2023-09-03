const submitBtn = document.getElementById('submitBtn');
const outputDiv = document.getElementById('output');
const ingredientesUsuario=[];
const listaIngredientes = {0: "Huevo", 1: "Harina", 2: "Leche", 3:"Papa", 4: "Manteca", 5: "Cerdo", 6: "Pan rallado", 7:"Carne", 8:"Pollo", 9:"Pescado", 10 : "Salsa de tomate", 11: "Lechuga", 12: "Queso", 13: "Salsa César", 14: "Crema", 15: "Levadura", 16: "Tomate", 17: "Salsa de soja", 18: "Cacao", 19: "Palta", 20: "Manzana", 21: "Banana", 22: "Chips de chocolate", 23: "Arroz", 24: "Brócoli", 25: "Champiñones", 26: "Espinaca", 27: "Frutilla", 28: "Lentejas", 29: "Limón", 30: "Langostinos", 31: "Melón"} 

function ingrediente_click(idIngrediente){
  // Obtener el checkbox por su id
  var checkbox = document.getElementById(idIngrediente);

  // Verificar el estado del checkbox
  if (checkbox.checked) {
    // Checkbox marcado: agregar elemento al arreglo
    ingredientesUsuario.push(idIngrediente);
  } else {
    // Checkbox desmarcado: remover elemento del arreglo
    var index = ingredientesUsuario.indexOf(idIngrediente);
    if (index > -1) {
      ingredientesUsuario.splice(index, 1);
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
    //outputDiv.textContent = "";

    let textContent = `
<div class="accordion recetaSalida mi-acordion">`;

data.recetas.forEach((receta, i) => {
  if (receta.faltantes !== receta.ingredientes.length) {
    textContent += `
    <div class="accordion-item">
      <div class="accordion-header">
        <button class="accordion-button inline" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${i}" aria-expanded="true" aria-controls="collapse-${i}">
          <div class="inline argentum titulitos4">${receta.nombre}</div>`;

    let coincidencias = 0;
    let tieneTodosLosIngredientes = false;
    for (const ingre of ingredientesUsuario) {
      if (data.recetas[i].ingredientes.includes(ingre)) {
        coincidencias++;
        if (coincidencias === data.recetas[i].ingredientes.length) {
          tieneTodosLosIngredientes = true;
          break; // Salir del bucle si se encuentran todos los ingredientes
        }
      }
    }

    if (tieneTodosLosIngredientes) {
      textContent += `
      <div class="enviar todosIng inline dere" div ingre>
        Tenés todos los ingredientes.
      </div>`;
    }

    textContent += `
        </button>
      </div>
      <div id="collapse-${i}" class="accordion-collapse collapse" aria-labelledby="collapse-${i}">
        <div class="accordion-body">
          <div class="ingredientesRecetas inline argentum">
            <p class="titulitos4">
              Ingredientes:
            </p>
            <ul>`;

    receta.ingredientes.forEach((ingrediente) => {
      let name = listaIngredientes[ingrediente];
      textContent += `
              <li class="argentum">${name}</li>`;
    });

    textContent += `
            </ul>
          </div>
          <div class="inline argentum pasos">
            <p class="titulitos4">
              Pasos a seguir:
            </p>
            ${receta.pasos}
          </div>
        </div>
      </div>
    </div>`;
  }
});

textContent += `
</div>`;

$("#output").html(textContent);

    console.log(textContent);
  })
  .catch(error => { // Si hubo un error, se muestra en consola
    console.error('Error:', error);
  });
  })

//preguntar como hacer que cierre, el border-radios, y centrar nombre rece.

