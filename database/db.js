const mysql = require('mysql2');

// Crea la conexión a la base de datos con los datos de acceso correspondientes
// Para que funcione, deben tener un servidor MySQL corriendo en el puerto 3307
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3307,
  database: 'test', // Nombre de la base de datos (reeemplazar por el de ustedes)
});

// Ejemplo de obtención de saludo desde la base de datos
// Devuelve un 'promise' que resuelve con el saludo o se rechaza con un error (Eso se maneja en el código del servidor)
function returnGreetingFromDB(name) {
  return new Promise((resolve, reject) => {
    // Fetching last name from the MySQL database
    connection.query(
      'SELECT last_name FROM persons WHERE first_name = ?',
      [name],
      (error, results) => {
        if (error) {
          console.error('Error:', error);
          reject(error);
        } else {
          const lastName = results[0]?.last_name || 'Unknown';
          const greeting = generateGreeting(name, lastName);
          resolve(greeting);
        }
      }
    );
  });
}

function generateGreeting(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

// Exporta las funciones que se quieran usar desde otros archivos
module.exports = {
  returnGreetingFromDB,
};
