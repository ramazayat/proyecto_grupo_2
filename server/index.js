const express = require('express');
const app = express();
const port = 5000; // Puerto de la APP Web

const ingredientes = {0: "Huevo", 1: "Harina", 2: "Leche", 3:"Papa", 4: "Manteca", 5: "Cerdo", 6: "Pan rallado", 7:"Carne", 8:"Pollo", 9:"Pescado", 10 : "Salsa de tomate", 11: "Lechuga", 12: "Queso", 13: "Salsa César", 14: "Crema", 15: "Levadura", 16: "Tomate", 17: "Salsa de soja", 18: "Cacao", 19: "Palta", 20: "Manzana", 21: "Banana", 22: "Chips de chocolate", 23: "Arroz", 24: "Brócoli", 25: "Champiñones", 26: "Espinaca", 27: "Frutilla", 28: "Lentejas", 29: "Limón", 30: "Langostinos", 31: "Melón"} 
const bizcocho = {nombre:"Bizcocho", ingredientes: [0,1], pasos: "Separamos las claras de las yemas en dos recipientes distintos. Batimos las claras con unas varillas a velocidad baja. Cuando empiecen a espumar y sin dejar de batir, añadimos poco a poco la mitad del azúcar. Continuamos batiendo durante unos seis-ocho minutos más a velocidad alta hasta conseguir un merengue firme.A continuación, sin necesidad de lavar las varillas, batimos las yemas junto con el resto del azúcar. El color cambiará y se volverán pálidas, también aumentarán en volumen por la cantidad de aire incorporado. Paramos de batir cuando las varillas dibujen un trazo en las yemas. Añadimos la harina, tamizada, y las claras, batidas, al recipiente con las yemas. Lo haremos de forma alterna y en tres partes, integrando la harina o las claras con movimientos envolventes y mucha suavidad. No añadimos el ingrediente siguiente hasta que no esté bien incorporado el anterior.", faltantes: 0, id:1};
const tortillaPapa = {nombre: "Tortilla de Papa", ingredientes: [0,3], pasos: "Pelar y cortar las papas en cuadraditos, poner en un recipiente(sarten) a freir, junto con la cebolla y el morron picados, batir los huevos con la sal , el oregano y la pimienta. Luego que las papas ya esten cocidas quitarles el aceite dejandole muy poquito casi nada, y colocar los huevos batidos sobre las papas , revolver un poco acomodar la preparacion que quede en una forma chata dejar cocinar 4 0 5 minutos y tratar de dar vuelta la preparacion para dorarla del otro lado (recomiendo darla vuelta de la siguiente manera). Colocar la tapa de una olla sobre la sarten colocar la preparacion tratando de no volcar nada y luego deslizar con cuidado nuevamente del otro lado sobre la sarten y dejar dorar otro 4 o 5 minutos , luego desmoldar sobre un plato o fuente y asi estara lista la tortilla.", faltantes: 0, id:2};
const galletitasManteca = {nombre:"Galletitas de Manteca", ingredientes:[0,1,2,4], pasos:"Incorporar los ingredientes de a uno hasta lograr una masa homogénea. Estirar para que la masa tenga el espesor de 1/2 cm. Armar formas con cortantes para galletitas, y disponerlas sobre una placa enmantecada. Cocinar en horno a 160º hasta que las galletitas estén doradas.", faltantes: 0, id:3};
const purePapa = {nombre:"Pure de Papa", ingredientes:[2,3,4], pasos:"Para comenzar a hacer el pure de papa debemos pelar las papas y lavar, para luego proceder a cortarlas en cubos de tamaño mediano, 2 o 3 centímetros esta bien. Colocamos las papas cortas en una cacerola con aguara hervida y sal. Las cocinamos por aproximadamente 20 minutos, nos vamos a dar cuenta cuando esten lista ya que al intentar pincharlas con un tenedor los cubos se van a desarmar. Colamos las papas y procedemos a agregarle la manteca y la leche, revolvemos para homogenizar la mezcla y salpimentamos a gusto.", faltantes: 0, id:4};
const cesar = {nombre:"Cesar", ingredientes: [8,11,12,13], pasos: "Deshojar y trozar la lechuga con las manos. Baña las hojas de lechuga con el aderezo César. Agrega crutones (opcional) y queso parmesano espolvoreado encima. ¡Disfruta inmediatamente!", faltantes: 0, id:5};
const listaRecetas = [bizcocho,tortillaPapa,galletitasManteca,purePapa,cesar];
// Código para importar el módulo 'bd' que maneja la conexión y las consultas a la BBDD (Está comentado para que no falle si no está corriendo el servidor MySQL)
//const db = require('./../database/db');

app.use(express.static(__dirname + "/../public")); // Indica que la carpeta 'public' contiene los archivos estáticos de la aplicación web
app.use(express.json());  // Indica que se usarán datos en formato JSON en las peticiones

app.post('/obtenerRecetas', (req, res) => { 
  const { ingredientesUsuario } = req.body;
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
  
function recorrerObjetos(id,ingredientes){ 

  for(let i = 0; i<ingrediente.length; i++){
}



}

function ordenarRecetas(ingredientes_usuario){	
  //Por cada receta calculo cuantos ingredientes le faltan
  listaRecetas.forEach(receta => {
    receta.faltantes = ingredientesFaltantes(receta.ingredientes, ingredientes_usuario)
  });
  
  // Ordeno la lista y la devuelvo
  return listaRecetas.sort(function(a,b) {return a.faltantes - b.faltantes})
}