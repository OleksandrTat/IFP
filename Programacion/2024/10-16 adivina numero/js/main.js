let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 10;

let miNumero = document.getElementById('miNumero');

let mostrarRespuesta = document.getElementById('mostrarRespuesta');
let mostrarRespuesta1 = document.getElementById('mostrarRespuesta1');

function estafador(){
    while(intentos > 0 ){
        mostrarRespuesta.innerHTML = ("Adivina el número entre 1 y 100. Te quedan "
        + intentos + " intentos");

        if (isNaN(miNumero)){
            mostrarRespuesta1.innerHTML = ("Por favor, entra un número válido");
        }
        else if(miNumero < 1 || miNumero > 100){
            mostrarRespuesta1.innerHTML = ("Entra un número entre el 1 y el 100");
        }
        else if (miNumero == numeroSecreto){
            mostrarRespuesta1.innerHTML = ("Felicidades!!!!!");
            break;
        }
        else if (miNumero > numeroSecreto){
            intentos --;
            mostrarRespuesta1.innerHTML = ("Numero secreto es menor");
        }
        else if (miNumero < numeroSecreto){
            mostrarRespuesta1.innerHTML = ("Numero secreto es mayor");
            intentos --;
        }
        else{
            alert("Error");
            mostrarRespuesta1.innerHTML = ("Error");
            break;
        }
    }
    if (intentos <= 0){
        mostrarRespuesta.innerHTML = ("Game over");
        mostrarRespuesta1.innerHTML = ("");
    }

}