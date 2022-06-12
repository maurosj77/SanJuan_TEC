/*- Crea una función.

- Coloca la palabra, (nombre) por parámetros.

- Si su valor es "Español", retorna el valor de "Hola"

- Si su valor es "Chino", retorna el valor de "Chao"

- Si su valor es "Portugues", retorna el valor de "ola"

- Caso contrario si el valor es false devuelve "Error, Ingrese un idioma válido".

- Muestra su resultado.*/
function idioma(palabra){
    if(palabra == "Español"){
        console.log("Hola");
    }
    if(palabra == "Chino"){
        console.log("Chao");
    }
    if(palabra == "Portugues"){
        console.log("ola");
    }if(palabra == "false" ){
        console.log("Error, Ingrese un idioma válido");
    }
}

console.log(idioma("false"));
