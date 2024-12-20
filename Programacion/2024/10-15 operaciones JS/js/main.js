function comparar(){
    let nombre_1 = document.getElementById("nombre_1").value
    let nombre_2 = document.getElementById("nombre_2").value

    let edad_1 = document.getElementById("edad_1").value
    let edad_2 = document.getElementById("edad_2").value

    let textoSalida = document.getElementById("textoSalida")
    let textoSalida1 = document.getElementById("textoSalida1")

    if (nombre_1 == nombre_2 && edad_1 == edad_2){

           textoSalida.innerHTML = ("Edades y nombres son iguales")

    }
    else if(nombre_1 == nombre_2 && edad_1 != edad_2){

        textoSalida.innerHTML = ("Nombres son iguales pero edades no")

    }
    else if(nombre_1 != nombre_2 && edad_1 == edad_2){

        textoSalida.innerHTML = ("Edades son iguales pero nombres no")

    }
    else{

        textoSalida.innerHTML = ("ningun dato es igual ")

    }

    if (edad_1 < edad_2){
        textoSalida1.innerHTML = (nombre_2 + " es major de " + nombre_1)
    }
    else if (edad_1 == edad_2){
        textoSalida1.innerHTML = (nombre_2 + " y " + nombre_1 + " tienen igual edad ")
    }
    else{
        textoSalida1.innerHTML = (nombre_2 + " es menor de " + nombre_1)
    }
}
