/*Crea una Function Closure en donde pueda visualizar “Hola Joaquin”

Recuerda, deben ser más de una función.

Pista: Deben mostrar la segunda funcion*/

function primerClosure(){

    var nombre = "JAVAS";

        function mostrarNombre(){
            return console.log ("hola " + nombre);
        }

mostrarNombre();
}

primerClosure();
/*
function iniciar() {
    var nombre = "Mozilla";  // La variable nombre es una variable local creada por iniciar.
    function mostrarNombre() {  // La función mostrarNombre es una función interna, una clausura.
      console.log(nombre);  // Usa una variable declarada en la función externa.
    }
    mostrarNombre();
  }
  iniciar();*/