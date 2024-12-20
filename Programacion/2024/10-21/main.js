let edadLegalDiscoteca = 16
let edadLegalBeber = 18

function comprobar(){

    let edadUsuario = document.getElementById("edad").value
    let permisos = document.getElementById("permisos")

    if (edadUsuario < edadLegalDiscoteca && edadUsuario < edadLegalBeber){
        
        permisos.innerHTML = ("Lo siento niño")
        alert("Vete a casa. Si no llamo a tus padres")
    } else if (edadUsuario >= edadLegalDiscoteca && edadUsuario >= edadLegalBeber){
        
        permisos.innerHTML = ("Felicidades!!! Bebe y baila hasta la mañana siguente. ")
        if (edadUsuario >= 50)
            permisos.innerHTML = ("Felicidades!!! Bebe y baila hasta la mañana siguente. Pero despacio")

    } else if (edadUsuario < edadLegalDiscoteca && edadUsuario >= edadLegalBeber){
        
        permisos.innerHTML = ("Puedes beber pero fuera de discoteca")

    }
    else if (edadUsuario >= edadLegalDiscoteca && edadUsuario < edadLegalBeber){
        
        permisos.innerHTML = ("Puedes entrar en la discoteca pero podras beber solo lechesita sabrosona de la marca PAJARO")

    }
    else{
        permisos.innerHTML = ("Error de sistema")
    }
}