document.getElementById("Enviar").addEventListener("click", function () {
  let nombre = document.getElementById("Nombre").value;
  let apellido = document.getElementById("Apellido").value;
  let fecha = document.getElementById("Fecha").value;

  let datos = {
      nombre: nombre,
      apellido: apellido,
      fecha: fecha
  };

  fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
          'Content-Type': 'application/json'
      }
  })
  .then(response => response.json())
  .then(data => {
      console.log(data); 
  })
  .catch(error => {
      console.error('Error:', error);
  });
});