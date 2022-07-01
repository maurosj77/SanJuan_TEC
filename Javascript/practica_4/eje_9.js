var usuarios = [

    {
        nombre: "Joaquin",
        apellido: "Quiroga",
        contraseña: "4561gagsg",
        esPremium: false
    },
    {
        nombre: "Ester",
        apellido: "Molina",
        contraseña: "2222/",
        esPremium: true
    },
    {
        nombre: "Adolfo",
        apellido: "Quiroga",
        contraseña: "xcgbe342",
        esPremium: false
    },
    {
        nombre: "Rodolfo",
        apellido: "Perez",
        contraseña: "piuo7876",
        esPremium: true
    },]

    function paraUsuarioAPremium(usuario){
        usuario.forEach(element => {
            element.contraseña= "Moretti";
            
        });
    }
    console.log(usuarios)
    paraUsuarioAPremium(usuarios)
    console.log(usuarios)