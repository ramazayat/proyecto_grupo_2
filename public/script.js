const submitBtn = document.getElementById('submitBtn');
const nameInput = document.getElementById('nameInput');
const outputDiv = document.getElementById('output');

// Agrega un listener al botón de submit para que cuando se haga click se envíe el nombre ingresado al servidor
submitBtn.addEventListener('click', () => {
  const name = nameInput.value; // Obtiene el nombre ingresado en el input

  fetch('/greet', { // Envía el nombre ingresado al servidor mediante una petición POST
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name }) // El nombre se envía en el body de la petición
  }) // Luego de enviar la petición, se espera a que el servidor responda
    .then(response => response.json()) // Se convierte la respuesta a JSON
    .then(data => { // Si la conversión fue exitosa, se obtiene el saludo y se muestra en pantalla
      outputDiv.textContent = data.greeting;
    })
    .catch(error => { // Si hubo un error, se muestra en consola
      console.error('Error:', error);
    });
});
