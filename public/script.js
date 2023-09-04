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
    

    let textContent = ``
    textContent +=
        `<div class="accordion recetaSalida">`;
    
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
                            <div class="enviar todosIng  dere">
                              Tenés todos los ingredientes.
                            </div>`;
                      }

            textContent += `
                  </button>
                </div>
        
        
                <div id="collapse-${i}" class="accordion-collapse collapse" aria-labelledby="collapse-${i}">
                  <div class="accordion-body">

                  <div class=" row">
                  <div class=" col-2">
                    <div class="ingredientesRecetas argentum">
                        <p class="titulitos4">
                          Ingredientes:
                        </p>
                        <ul>`;
            receta.ingredientes.forEach((ingrediente) => {
                let name = listaIngredientes[ingrediente];
                textContent += `
                                  <li class="argentum ">
                                    ${name}
                                  </li>`;
            });
            textContent += `
                        </ul>

                        
                      </div>`

            textContent += `
                   <div id="dificulty">
                          <div class="titulitos4 argentum">
                            Dificultad: 
                          </div>`
                    
                        for (let j = 0; j < receta.dificultad; j++) {
                            if(receta.dificultad==1 || receta.dificultad==2){

                             
                              textContent += `<i class="fa-solid fa-spoon verde"> </i> `;
                        }else if(receta.dificultad==3 || receta.dificultad==4){
                          textContent += `<i class="fa-solid fa-spoon amarillo"> </i> `;
                        }else if(receta.dificultad==5){
                          textContent += `<i class="fa-solid fa-spoon rojo"> </i> `;
                        }
                      }
                        for (let j = 0; j < (5 - receta.dificultad); j++) {
                            textContent += `<i class="fa-solid fa-spoon"> </i> `;
                        }
            `<br>

            
                      </div>
                      `
                    
                      const ingredientesNecesarios = receta.ingredientes;

                      // Función para mostrar los ingredientes que faltan
                      function mostrarIngredientesFaltantes(ingredientesNecesarios, ingredientesUsuario) {
                        const ingredientesFaltantes = ingredientesNecesarios.filter(ingrediente => !ingredientesUsuario.includes(ingrediente));
                      
                        if (ingredientesFaltantes.length === 0) {
                          console.log('Tienes todos los ingredientes necesarios para la receta.');
                        } else {
                          console.log('Te falta:');
                          console.log(ingredientesFaltantes);
                        }
                      }

                    
                      
                      // Llamar a la función para mostrar los ingredientes faltantes
                      mostrarIngredientesFaltantes(ingredientesNecesarios, ingredientesUsuario);
                      
                      
            textContent += `
            
                  </div>
                  </div>`
                  textContent += ` <div class="argentum pasos col-10">
                    <p class="titulitos4">
                      Pasos a seguir:
                    </p>
                    ${receta.pasos}
                    </div>
                  </div>
                </div>
              </div>
      </div>`;
        }
    });
    
    
    
    $("#output").html(textContent);
    
    })
  
  .catch(error => { // Si hubo un error, se muestra en consola
    console.error('Error:', error);
  });
  })