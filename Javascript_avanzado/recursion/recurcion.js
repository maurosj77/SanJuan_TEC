function recursiva(x){
if( x <= 0){
    return 0
}

return x + recursiva( x -1)
}
  
console.log(recursiva(2))