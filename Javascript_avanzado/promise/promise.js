

    
var Promesa = new Promise((resolve, reject) =>{
    const datos = [{id:1,title:"peli1",año:2001,views:10
},{id:1,title:"peli1",año:2008,views:4000
},{id:1,title:"peli2",año:2010,views:250
},{id:1,title:"peli3",año:2005,views:360
},{id:1,title:"peli4",año:2007,views:10
}];
    var suma=0;
    datos.forEach(element => {
         suma+=element.views;
    });

suma != 0 ? resolve(suma) :reject(new Error("No existen datos"));

setTimeout(() =>{console.log(suma)}, 3000);
});

Promesa.then((data) =>{
console.log("El total es: ")
},function(err){
console.log(err.message)
})

