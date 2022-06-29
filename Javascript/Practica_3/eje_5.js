function fizzBuzz(numero) {

    // Si "numero" es divisible entre 3, devuelve "fizz"
    
    // Si "numero" es divisible entre 5, devuelve "buzz"
    
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    
    // De lo contrario, devuelve el numero
    if((numero%3)==0){
        return "fizz"
    }else if((numero%5)==0){
        return "buzz"
    }else if(((numero%3)==0)&&((numero%5)==0)){
        return "fizzbuzz"
    }else{
        return numero;
    }
    
    }
    console.log(fizzBuzz(17));