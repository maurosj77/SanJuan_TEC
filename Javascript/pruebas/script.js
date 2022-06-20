function capturar() {
  function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  let nombreCaptura = document.getElementById("nombre").value;
  let edadCaptura = document.getElementById("edad").value;
 


   nuevosujeto  = new Persona(nombreCaptura,edadCaptura);
  
  agregar();
}
let baseDeDatos=[];
function agregar(){
    baseDeDatos.push(nuevosujeto);
    console.log(baseDeDatos);
document.getElementById("tabla").innerHTML += "<h1>"+ nuevosujeto.nombre+"</h1>"
}
