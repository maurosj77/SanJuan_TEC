function capturar() {
  function Persona(nombre) {
    this.nombre = nombre;
  }
  let nombreCapturado = document.getElementById("nombre").value;
   nuevo = new Persona(nombreCapturado);
  agendar();
}

lista = [];

function agendar() {
  lista.push(nuevo);
  console.log(lista);

document.getElementById("listado").innerHTML += nuevo.nombre +'<br>';

}
function borrar(){
    lista = [];
   
}

