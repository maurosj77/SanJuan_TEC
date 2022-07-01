function tieneEmail(usuario){
    if (usuario.email){
        return true
    }else{
        return false
    }
}

let usu={nombre:"cachito",email:"mmm"};

console.log(tieneEmail(usu));