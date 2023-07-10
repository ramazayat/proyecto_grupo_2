const express = require('express');
const app = express();
const port = 5000; // Puerto de la APP Web

const bizcocho = {nombre:"Bizcocho", ingredientes: [0,1], pasosASeguir: "pasos bizcocho"};
const tortillaPapa = {nombre: "Tortilla de Papa", ingredientes: [0,3], pasosASeguir: "pasos tortilla"};
const galletitasManteca = {nombre:"Galletitas de Manteca", ingredientes:[0,1,2,4], pasosASeguir:"pasos galletitas"};
const purePapa = {nombre:"Pure de Papa", ingredientes:[2,3,4], pasosASeguir:"pasos pure"};
const listaRecetas = [bizcocho,tortillaPapa,galletitasManteca,purePapa]
/*const listaRecetas = [[bizcocho.ingredientes, 0, bizcocho.nombre,2, bizcocho.pasosASeguir],
 [tortillaPapa.ingredientes, 0, tortillaPapa.nombre,2,tortillaPapa.pasosASeguir],
  [galletitasManteca.ingredientes, 0, galletitasManteca.nombre,4,galletitasManteca.pasosASeguir],
   [purePapa.ingredientes, 0, purePapa.nombre,3,purePapa.pasosASeguir]];*/
// Código para importar el módulo 'bd' que maneja la conexión y las consultas a la BBDD (Está comentado para que no falle si no está corriendo el servidor MySQL)
//const db = require('./../database/db');

app.use(express.static(__dirname + "/../public")); // Indica que la carpeta 'public' contiene los archivos estáticos de la aplicación web
app.use(express.json());  // Indica que se usarán datos en formato JSON en las peticiones

app.post('/obtenerRecetas', (req, res) => { 
  const { ingredientesUsuario } = req.body;
  console.log(ingredientesUsuario)
  let recetas = ordenarRecetas(ingredientesUsuario);
  
  res.json({recetas});


  // Código para obtener el saludo usando los datos guardados en la BBDD
  // Ustedes deben reemplazar este código por el suyo, según las necesidades de su aplicación
  /* 
  db.returnGreetingFromDB(name)

    .then((greeting) => {
      if (greeting) {
        console.log(greeting);
        res.json({ greeting });
      } else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    })

    .catch((error) => {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
  */
});
// Inicializa la aplicación web e imprime un mensaje en la consola indicando el puerto de escucha
app.listen(port, () => { 
  console.log(`Server running on http://localhost:${port}`);
});

function ingredientesFaltantes(receta, busqueda){
  var cantIngFaltantes=0;
  for(let i = 0; i<receta.length; i++){
    for(let h = 0; h<busqueda.length; h++){
      if(receta[i]===busqueda[h]){
        cantIngFaltantes++
      }
    }	
  }
  return cantIngFaltantes;
  }
  
  function ordenarRecetas(ingredientes){	// Recorro la lista de recetas y actualizo...
  
  for(let i=0; i<listaRecetas.length; i++){
    listaRecetas[i][1]= ingredientesFaltantes(listaRecetas[i][0],ingredientes);
  } 
  
  // Ordeno la lista 
  
  var anteriorMayor=32;
  var posOrdenar=listaRecetas.length-1;
  const ordenar = [];
  
  for(let i=0; i<listaRecetas.length; i++){
    var mayor = 0;
    for(let i=0; i<listaRecetas.length; i++){
      if( (listaRecetas[i][3] - listaRecetas[i][1])<anteriorMayor && (listaRecetas[i][3] - listaRecetas[i][1])>mayor){
        mayor= (listaRecetas[i][3] - listaRecetas[i][1]);
      }
    }
    anteriorMayor=mayor;
    for(let i=0; i<listaRecetas.length; i++){
      if(mayor==(listaRecetas[i][3] - listaRecetas[i][1])&&posOrdenar>=0){
        ordenar[posOrdenar]={nombre:listaRecetas[i][2],pasos:listaRecetas[4]};
        posOrdenar--;
      }
    }
  }
  return ordenar;
  }