 // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
    // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"

    function crearObjeto(nombre,edad){

        let objeto={nombre:nombre,
        edad:edad}
        return objeto

    }
    crearObjeto();

    console.log(crearObjeto("Mara ",35));