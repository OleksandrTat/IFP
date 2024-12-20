let edad_1;
let edad_2;
let edad_3;
let edad_4;
let edad_5;
let edadMedia;

edad_1 = document,getElementById("edad_1").value
edad_2 = document,getElementById("edad_2").value
edad_3 = document,getElementById("edad_3").value
edad_4 = document,getElementById("edad_4").value
edad_5 = document,getElementById("edad_5").value
edadMedia = document,getElementById("respuesta").value

edad_1=parseInt(edad_1)
edad_2=parseInt(edad_2)
edad_3=parseInt(edad_3)
edad_4=parseInt(edad_4)
edad_5=parseInt(edad_5)

function calcular() {
    edadMedia = (edad_1 + edad_2 + edad_3 + edad_4 + edad_5)/5
    window.alert
}