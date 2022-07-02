function saludar( saludo ){

    return function( nombre ){
    
    console.log(saludo + ' ' + nombre);
    
    }
    
    }
    
    var saludarHola = saludar('Hola'); // Esto
    //devuelve una función
    
    saludarHola('Joaco'); // 'Hola Joaco'