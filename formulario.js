document.getElementById("Enviar").addEventListener("click", function () {
  let nombre = document.getElementById("Nombre").value;
  let apellido = document.getElementById("Apellido").value;
  let fecha = documnt.getElementById("Fecha").value;


  
let datos = {
      
  nomb: nombre,
  apellido: apellido,
  fecha: fecha
};

fetch('https://jsonplaceholder.typicode.com/users',{
  method:'POST',
  body:JSON.stringify(datos),
  headers:{'Content-Type':'application/json'    
}
})
.then(Response=> Response.json())
.then(data =>{
  console.log(datos);
})
  .catch(error=>{
      console.error('Error:',error);
  });
});