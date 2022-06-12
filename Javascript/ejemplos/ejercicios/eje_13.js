/*- Crea una función.

- Coloca la palabra, (nombre y Dni) por parámetros.

- Si nombre y edad coinciden con tu verdadero nombre y apellido,

retorna "Hola mi Nombre es ... y mi Dni es ..."

- Caso contrario si el valor es false devuelve "Error, Este/a no soy yo".

- Muestra su resultado.*/
function soy(nom,dni){
    if(nom == "Marcela" && dni == 27043852){
        return "Hola mi Nombre es "+nom+" y mi Dni es "+dni;
    }else{
        return "Error, Este/a no soy yo";
    }
}
console.log(soy("Marcela",27043852));
