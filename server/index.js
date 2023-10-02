const express = require('express');
const app = express();
const port = 5000; // Puerto de la APP Web

// Código para importar el módulo 'bd' que maneja la conexión y las consultas a la BBDD (Está comentado para que no falle si no está corriendo el servidor MySQL)
const db = require('./../database/db');
const listaIngredientes = db.obtenerIngredientes();

app.use(express.static(__dirname + "/../public")); // Indica que la carpeta 'public' contiene los archivos estáticos de la aplicación web
app.use(express.json());  // Indica que se usarán datos en formato JSON en las peticiones

app.post('/obtenerRecetas', (req, res) => {
  const { ingredientesUsuario } = req.body;
  //let recetas = ordenarRecetas(ingredientesUsuario);
  const recetas = db.obtenerRecetas(ingredientesUsuario).then((recetas) => {
    recetas.forEach(receta => {
      let nueva_lista_ingredientes = [];
      receta.ingredientes.split(',').forEach(ingrediente => {
        nueva_lista_ingredientes.push(parseInt(ingrediente))
      })
      receta.ingredientes = nueva_lista_ingredientes
    });
    ordenarRecetas(ingredientesUsuario, recetas);
    let resultado = new Object()
    resultado.recetas = recetas;
    resultado.listaIngredientes = listaIngredientes;
    console.log(resultado);
    //recetas cambiar por resultados asi van recetas + list ingredientes*/ 
    res.json({resultado});
  })
});
// Inicializa la aplicación web e imprime un mensaje en la consola indicando el puerto de escucha
app.listen(port, () => { 
  console.log(`Server running on http://localhost:${port}`);
});
 //Ingredientes como string pasarlos a lista.

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