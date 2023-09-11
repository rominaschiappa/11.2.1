let form = document.getElementById("formulario");

form.addEventListener("submit", evento =>{
    evento.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let fnac = document.getElementById("fnac").value;

    let datos = {
        nombre: nombre,
        apellido: apellido,
        fnac: fnac
    };

    console.log(datos);

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(datos)
})
        .then((response) => response.json())
        .then(data => {
          console.log(data); 
      })
      .catch(error => {
          console.error('Error:', error);
      });
});