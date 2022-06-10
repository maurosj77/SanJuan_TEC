/*const arreglo2=[];
const arreglo=[10,21,22,2,5];
for(let i=0; i<arreglo.length; i++) {
    if (arreglo[i] > 20){

    }
}*/
var arreglo = [10, 21, 22, 2, 5];

var nuevoArreglo = arreglo.map((item) => {
  if(item > 20){
    console.log(item)
  }
})