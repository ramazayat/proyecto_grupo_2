const express = require('express');
const app = express();
const port = 5000; // Puerto de la APP Web

//const bizcocho = {nombre:"Bizcocho", dificultad: 1 ,ingredientes: [0,1], pasos: "Separamos las claras de las yemas en dos recipientes distintos. Batimos las claras con unas varillas a velocidad baja. Cuando empiecen a espumar y sin dejar de batir, añadimos poco a poco la mitad del azúcar. Continuamos batiendo durante unos seis-ocho minutos más a velocidad alta hasta conseguir un merengue firme.A continuación, sin necesidad de lavar las varillas, batimos las yemas junto con el resto del azúcar. El color cambiará y se volverán pálidas, también aumentarán en volumen por la cantidad de aire incorporado. Paramos de batir cuando las varillas dibujen un trazo en las yemas. Añadimos la harina, tamizada, y las claras, batidas, al recipiente con las yemas. Lo haremos de forma alterna y en tres partes, integrando la harina o las claras con movimientos envolventes y mucha suavidad. No añadimos el ingrediente siguiente hasta que no esté bien incorporado el anterior.", faltantes: 0, id:1};
//const tortillaPapa = {nombre: "Tortilla de Papa", dificultad: 2, ingredientes: [0,3], pasos: "Pelar y cortar las papas en cuadraditos, poner en un recipiente(sarten) a freir, junto con la cebolla y el morron picados, batir los huevos con la sal , el oregano y la pimienta. Luego que las papas ya esten cocidas quitarles el aceite dejandole muy poquito casi nada, y colocar los huevos batidos sobre las papas , revolver un poco acomodar la preparacion que quede en una forma chata dejar cocinar 4 o 5 minutos y tratar de dar vuelta la preparacion para dorarla del otro lado (recomiendo darla vuelta de la siguiente manera). Colocar la tapa de una olla sobre la sarten colocar la preparacion tratando de no volcar nada y luego deslizar con cuidado nuevamente del otro lado sobre la sarten y dejar dorar otro 4 o 5 minutos , luego desmoldar sobre un plato o fuente y asi estara lista la tortilla.", faltantes: 0, id:2};
//const galletitasManteca = {nombre:"Galletitas de Manteca",dificultad: 5, ingredientes:[0,1,2,4], pasos:"Incorporar los ingredientes de a uno hasta lograr una masa homogénea. Estirar para que la masa tenga el espesor de 1/2 cm. Armar formas con cortantes para galletitas, y disponerlas sobre una placa enmantecada. Cocinar en horno a 160º hasta que las galletitas estén doradas.", faltantes: 0, id:3};
//const purePapa = {nombre:"Pure de Papa",dificultad: 3, ingredientes:[2,3,4], pasos:"Para comenzar a hacer el pure de papa debemos pelar las papas y lavar, para luego proceder a cortarlas en cubos de tamaño mediano, 2 o 3 centímetros esta bien. Colocamos las papas cortas en una cacerola con aguara hervida y sal. Las cocinamos por aproximadamente 20 minutos, nos vamos a dar cuenta cuando esten lista ya que al intentar pincharlas con un tenedor los cubos se van a desarmar. Colamos las papas y procedemos a agregarle la manteca y la leche, revolvemos para homogenizar la mezcla y salpimentamos a gusto.", faltantes: 0, id:4};
//const cesar = {nombre:"Cesar", dificultad: 4, ingredientes: [8,11,12,13], pasos: "Deshojar y trozar la lechuga con las manos. Baña las hojas de lechuga con el aderezo César. Agrega crutones (opcional) y queso parmesano espolvoreado encima. ¡Disfruta inmediatamente!", faltantes: 0, id:5};
//const listaRecetas = [bizcocho,tortillaPapa,galletitasManteca,purePapa,cesar];
// Código para importar el módulo 'bd' que maneja la conexión y las consultas a la BBDD (Está comentado para que no falle si no está corriendo el servidor MySQL)
const db = require('./../database/db');

app.use(express.static(__dirname + "/../public")); // Indica que la carpeta 'public' contiene los archivos estáticos de la aplicación web
app.use(express.json());  // Indica que se usarán datos en formato JSON en las peticiones

app.post('/obtenerRecetas', (req, res) => {
  const { ingredientesUsuario } = req.body;
  //let recetas = ordenarRecetas(ingredientesUsuario);
  const recetas=db.obtenerRecetas(ingredientesUsuario).then((recetas) => {
   
    ordenarRecetas(ingredientesUsuario, recetas);
    console.log(recetas);


    recetas.forEach
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
  res.json({recetas});
});
// Inicializa la aplicación web e imprime un mensaje en la consola indicando el puerto de escucha
app.listen(port, () => { 
  console.log(`Server running on http://localhost:${port}`);
});

function ingredientesFaltantes(ingredientes_receta, ingredientes_usuario){
  var cantIngFaltantes=ingredientes_receta.length; 
  //Por cada ingrediente de la receta
  for(let i = 0; i<ingredientes_receta.length; i++){
    //Por cada ingrediente del usuario
    for(let h = 0; h<ingredientes_usuario.length; h++){
      if(ingredientes_receta[i]===ingredientes_usuario[h]){
        cantIngFaltantes--;
      }
    }
  }
  return cantIngFaltantes;
}

function ordenarRecetas(ingredientes_usuario, listaRecetas) {
      listaRecetas.forEach(receta => {
      receta.faltantes = ingredientesFaltantes(receta.ingredientes, ingredientes_usuario);
    });

    // Ordenar la lista y devolverla
    return listaRecetas.sort((a, b) => a.faltantes - b.faltantes);
}