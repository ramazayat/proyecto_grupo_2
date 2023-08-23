const express = require('express');
const app = express();
const port = 5000; // Puerto de la APP Web

const bizcocho = {nombre:"Bizcocho", ingredientes: [0,1], pasos: "pasos bizcocho", faltantes: 0, id:1};
const tortillaPapa = {nombre: "Tortilla de Papa", ingredientes: [0,3], pasos: "pasos tortilla", faltantes: 0, id:2};
const galletitasManteca = {nombre:"Galletitas de Manteca", ingredientes:[0,1,2,4], pasos:"pasos galletitas", faltantes: 0, id:3};
const purePapa = {nombre:"Pure de Papa", ingredientes:[2,3,4], pasos:"pasos pure", faltantes: 0, id:4};
const cesar = {nombre:"Cesar", ingredientes: [18,8,11,12], pasos: "pasos cesar", faltantes: 0, id:5};
const listaRecetas = [bizcocho,tortillaPapa,galletitasManteca,purePapa, cesar];
// Código para importar el módulo 'bd' que maneja la conexión y las consultas a la BBDD (Está comentado para que no falle si no está corriendo el servidor MySQL)
//const db = require('./../database/db');

app.use(express.static(__dirname + "/../public")); // Indica que la carpeta 'public' contiene los archivos estáticos de la aplicación web
app.use(express.json());  // Indica que se usarán datos en formato JSON en las peticiones

app.post('/obtenerRecetas', (req, res) => { 
  const { ingredientesUsuario } = req.body;
  console.log(ingredientesUsuario)
  let recetas = ordenarRecetas(ingredientesUsuario);
  
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
  
function ordenarRecetas(ingredientes_usuario){	
  //Por cada receta calculo cuantos ingredientes le faltan
  listaRecetas.forEach(receta => {
    receta.faltantes = ingredientesFaltantes(receta.ingredientes, ingredientes_usuario)
  });
  
  // Ordeno la lista y la devuelvo
  return listaRecetas.sort(function(a,b) {return a.faltantes - b.faltantes})
}

function traerReceta(id){

}