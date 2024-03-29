const submitBtn = document.getElementById('submitBtn');
const outputDiv = document.getElementById('output');
const ingredientesUsuario=[];
//hay que arreglar esto
//const listaIngredientes = {1: "Huevo", 2: "Harina", 3: "Leche", 4:"Papa", 5: "Manteca", 6: "Cerdo",  7:"Carne", 8:"Pollo", 9:"Pescado", 10 : "Salsa de tomate", 11: "Lechuga", 12: "Queso", 13: "Salsa César", 14: "Crema", 15: "Levadura", 16: "Tomate", 17: "Salsa de soja", 18: "Cacao", 19: "Palta", 20: "Manzana", 21: "Banana", 22: "Chips de chocolate", 23: "Arroz", 24: "Brócoli", 25: "Champiñones", 26: "Espinaca", 27: "Frutilla", 28: "Lentejas", 29: "Limón", 30: "Langostinos", 31: "Melón", 32: "Pan rallado",} 
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
    
    let sinResultado = false
    let textContent = ``
    textContent +=
        `<div class="accordion recetaSalida">`;
       data.resultado.recetas.forEach((receta, i) => {
        if (receta.faltantes !== receta.ingredientes.length) {
         
            textContent += `
              <div class="accordion-item">
                <div class="accordion-header">
                  <button class="accordion-button inline" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${i}" aria-expanded="true" aria-controls="collapse-${i}">
                    <div class="inline argentum titulitos4">${receta.nombre}</div>`;

                      let coincidencias = 0;
                      let tieneTodosLosIngredientes = false;
                      for (const ingre of ingredientesUsuario) {
                          if (data.resultado.recetas[i].ingredientes.includes(ingre)) { 
                              coincidencias++;
                              if (coincidencias === data.resultado.recetas[i].ingredientes.length) {
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
              let name;
                for(let e = 0; e<data.resultado.listaIngredientes.length; e++){
                    for(let k=0; k<data.resultado.cantidades.length; k++){
                      if(receta.id_receta == data.resultado.cantidades[k].id_receta && data.resultado.cantidades[k].id_ingrediente == ingrediente && data.resultado.cantidades[k].cantidad>0){
                        name = data.resultado.cantidades[k].cantidad + " " + data.resultado.cantidades[k].unidad_de_medida
                      }else if(receta.id_receta == data.resultado.cantidades[k].id_receta && data.resultado.cantidades[k].id_ingrediente == ingrediente && data.resultado.cantidades[k].cantidad==0){
                        name = " " + data.resultado.cantidades[k].unidad_de_medida
                      }
                    } 
                  if(data.resultado.listaIngredientes[e].id_ingredientes == ingrediente){
                   name += " " + data.resultado.listaIngredientes[e].nombre_ingrediente;
                    textContent += `
                                    <li class="argentum ">
                                      ${name}
                                    </li>`;
                  }
                }
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
                    
                     /* const ingredientesNecesarios = receta.ingredientes;

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
                      mostrarIngredientesFaltantes(ingredientesNecesarios, ingredientesUsuario);*/
                      
                      
            textContent += `
            
                  </div>
                  </div>`
                  textContent += ` <div class="argentum pasos col-7">
                    <p class="titulitos4">
                      Pasos a seguir:
                    </p>
                    ${receta.pasos}
                    </div>
                    <div class="col-3">
                    <img class="im_rece" src="${receta.img}" alt="Imagen de ${receta.nombre}">
                    </div>
                  </div>
                </div>
              </div>
        </div>`;
        
        }else{
         
          if(!sinResultado)
          {
            textContent += `<div class="marca argentum no_ingredientes_lbl">No tenemos recetas con estos ingredientes.</div>`
            sinResultado=true
          }
        }
    });
    
    $("#output").html(textContent);
    if($(".accordion-item").length>0)
    {
      $(".no_ingredientes_lbl").html("")
    }
    


    })
    
  
  .catch(error => { // Si hubo un error, se muestra en consola
    console.error('Error:', error);
  });
  })