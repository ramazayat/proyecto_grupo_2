const express = require('express');
const app = express();
const port = 3000; // Puerto de la APP Web
const bizcocho = [0,1];
const tortillaPapa = [0,3];
const galletitasManteca = [0,1,2,4];
const purePapa = [2,3,4];
const listaRecetas = [[bizcocho, 0, "Bizcocho",2], [tortillaPapa, 0, "Tortilla de Papa",2], [galletitasManteca, 0, "Galletitas de Manteca",4], [purePapa, 0, "Puré de Papa",3]];

// Código para importar el módulo 'bd' que maneja la conexión y las consultas a la BBDD (Está comentado para que no falle si no está corriendo el servidor MySQL)
//const db = require('./../database/db');

app.use(express.static(__dirname + "/../public")); // Indica que la carpeta 'public' contiene los archivos estáticos de la aplicación web
app.use(express.json());  // Indica que se usarán datos en formato JSON en las peticiones

// Ruta para obtener el saludo, recibe el nombre en el body de la petición y devuelve el saludo en formato JSON

app.post('/greet', (req, res) => { 
  const { name } = req.body;

  const greeting = `Hello, ${name}!`;

  res.json({greeting});


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

app.post('/obtenerRecetas', (req, res) => { 
  const { ingredientesUsuario } = req.body;
  let recetas = ordenarRecetas();
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
  
  function ordenarRecetas(){	// Recorro la lista de recetas y actualizo...
  
  for(let i=0; i<listaRecetas.length; i++){
    listaRecetas[i][1]= ingredientesFaltantes(listaRecetas[i][0],ingredientesUsuario);
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
        ordenar[posOrdenar]=listaRecetas[i][2];
        posOrdenar--;
      }
    }
  }
  return ordenar;
  }