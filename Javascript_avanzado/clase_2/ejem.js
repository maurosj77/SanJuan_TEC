/*array = [20,31,52,85,45];

let array2=[];
function hacer() {
    array2=array.map((item)=>{
    })
};


console.log(array2)*/


array = [{nombre:"MARCELA"},
{nombre:"Gaston"},{nombre:"carlos"}
];

function mostrar(){
    return array.map((item) =>{
        return item.nombre
    })
};
console.log(mostrar())
