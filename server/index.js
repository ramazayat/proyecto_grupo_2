const express = require('express');
const app = express();
const port = 3000; // Puerto de la APP Web

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

// Inicializa la aplicación web e imprime un mensaje en la consola indicando el puerto de escucha
app.listen(port, () => { 
  console.log(`Server running on http://localhost:${port}`);
});