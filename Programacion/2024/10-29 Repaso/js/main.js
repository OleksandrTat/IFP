

// let number = prompt("Entra el numero: ")
// if((number % 2) == 0){

//     number = ('El numero es par');

// }else{

//     number = ('El numero NO es par');4

//     }
// salida.innerHTML = (number)





// let calificacion = prompt("Entra tu calificacion")

// if(calificacion >= 90){
//     console.log("EXELENTE")
//     salida.innerHTML = ("EXELENTE")
// }else if(calificacion >=80 && calificacion <90){
//     console.log("NOTABLE")
//     salida.innerHTML = ("NOTABLE")
// }else if(calificacion >=70 && calificacion <80){
//     console.log("BIEN")
//     salida.innerHTML = ("BIEN")
// }else if(calificacion >=60 && calificacion <70){
//     console.log("SUFICIENTE")
//     salida.innerHTML = ("SUFICIENTE")
// }else{
//     console.log("NO APTO")
//     salida.innerHTML = ("NO APTO")
// }




while(true){
    let edad = parseInt(prompt("Ingresa tu edad: "))
    let Entrenamiento = prompt("Tienes entrenamiento en combate?(si/no)").toLowerCase();

    console.log(edad)
    console.log(Entrenamiento)
    
    if(Entrenamiento == "si"){
        let anosEn = parseInt(prompt("Cuantos años has pasado entrenando? (1-10):"));
        if(edad >=25 && anosEn >= 8){
            alert("Eres apto/a para ser un/a Superheroe")
        }else if(edad >=18 && anosEn >= 5){
            alert("No estas preparado para ser un superheroe")
        }
    }else{
        if(edad < 18 && Entrenamiento == "no"){
            alert("Vete a jugar LOL")
        }else if(edad < NaN){
            alert("Que no intentas romper sistema")
        }
        else{
            alert("Eres apto para parecer que eres un heroe")
        }
    }
}