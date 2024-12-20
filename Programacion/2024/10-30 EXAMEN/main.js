let nota1 = parseInt(prompt("Ingresa la primera calificación (0-100):"));
let nota2 = parseInt(prompt("Ingresa la segunda calificación (0-100):"));
let nota3 = parseInt(prompt("Ingresa la tercera calificación (0-100):"));
 
 
let notapromedio = (nota1 + nota2 + nota3)/3
 
 
if (notapromedio >= 85 && nota1 > 70 && nota2 > 70 && nota3 > 70){
    alert("Exelente")
}else if (notapromedio >= 70 && nota1 > 50 && nota2 > 50 && nota3 > 50){
    alert("Aprobado")
}else{
    alert("Suspendido")
}