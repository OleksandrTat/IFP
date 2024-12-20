function calcular(){
    //console.log("click")
    let nombre = document.getElementById("nombre").value
    let dinero = document.getElementById("dinero").value
    let cantidad = document.getElementById("cantidad").value
    document.getElementById("precio").value
     

    if (nombre == 'mano' ){
        if (cantidad == 3 || cantidad == 2){

        document.getElementById("precio").innerHTML = cantidad +' ' + nombre + ' por el precio total es solamente 2 millions de euros'
        }
        else if (cantidad >= 4)
            document.getElementById("precio").innerHTML = 
            'Lo siento pero hoy no tenemos tantos manos. Vuelva repetir mañana'
        else {
            document.getElementById("precio").innerHTML = cantidad +' ' + nombre + ' por el precio total solamente 1 millions de euros'
        }

    }
    else {
            document.getElementById("precio").innerHTML = 
            'Lo siento pero hoy no tenemos ' + nombre + '. Intenta repetir mañana'
        }
    
    
}