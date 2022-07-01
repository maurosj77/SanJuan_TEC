var usuarios = [
    {
        nombre: "Joaquin",
        apellido: "Quiroga",
        esPremium: false,
        posts:      [    
                     {Dislikes: 155,
                     Likes: 566,
                     Rettweets: 677,},
    
                     {Dislikes: 11,
                     Likes: 897,
                     Rettweets: 2,},
                    ]
    },
    
    {nombre: "Ester",apellido: "Molina",contraseña: "2222/",esPremium: true
    
    },
    
    ];
    //Arreglo para item 10

function sumarLikesDeUsuario(usuario) {
    let suma=0;
usuario[0].posts.forEach(element => {
    suma += element.Likes;
    
});
return suma
}
console.log(sumarLikesDeUsuario(usuarios));


 