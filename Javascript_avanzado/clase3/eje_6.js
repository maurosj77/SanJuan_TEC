var global = "Hola!"
function a(){
  console.log(global); Hola
  global = "Hello!" 
}
function b(){
  var global = "Chao!"
  console.log(global) Hola
}
a(); Hello
b(); Chao!
console.log(global) Hola