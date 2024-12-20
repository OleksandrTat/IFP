let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 5;

while(intentos > 0 ){
    let respuesta = prompt("Adivina el número entre 1 y 100. Te quedan "
    + intentos + "intentos");

    if (isNaN(respuesta)){
        alert("Por favor, entra un número válido");
    
    }
    else if(respuesta < 1 || respuesta > 100){
        alert("Entra un número entre el 1 y el 100");
    }
    else if (respuesta = numeroSecreto){
        alert("Felicidades!!!!!");
        break;
    }
    else if (respuesta > numeroSecreto){
        alert("Numero secreto es menor");
        intentos --;
    }
    else if (respuesta < numeroSecreto){
        alert("Numero secreto es mayor");
        intentos --;
    }
    else{
        alert("Error");
        break;
    }
}
if (intentos <= 0){
    alert("Game over");
}
