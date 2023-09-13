const mysql = require('mysql2');

// Crea la conexión a la base de datos con los datos de acceso correspondientes
// Para que funcione, deben tener un servidor MySQL corriendo en el puerto 3307
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'keko', // Nombre de la base de datos (reeemplazar por el de ustedes)
});

connection.connect((err) =>{
  if (err) throw (err)
})

// Ejemplo de obtención de saludo desde la base de datos
// Devuelve un 'promise' que resuelve con el saludo o se rechaza con un error (Eso se maneja en el código del servidor)

  // Fetching last name from the MySQL database
  function prueba(ingreUsua){
    return new Promise((resolve, reject) => {
      // Fetching last name from the MySQL database
      connection.query(
        'SELECT  id_receta, dificultad, nombre, group_concat(id_ingrediente) as ingredientes, pasos FROM ingredienteporreceta join recetas on ingredienteporreceta.id_receta = recetas.id where id_ingrediente in (?) group by recetas.id;',
        [ingreUsua],
        (error, results) => {
          if (error) {
            console.error('Error:', error);
            reject(error);
          } else {
            console.log(results);
            resolve(results);
          }
        }
      );
    });
  }
// Exporta las funciones que se quieran usar desde otros archivos
module.exports = {
  prueba,
};
