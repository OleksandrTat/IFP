// function camaron(){
//     let camaron = 6 > 1 ? "true":"false"
//     let camaron1 = camaron == true ? "FALSE":"TRUE"
//     console.log(camaron)
//     console.log(camaron1)
// }
    
// camaron();




// let primeraEntrada = false;
// let segundaEntrada = false;

// acceso = primeraEntrada
//     ? "acceso denegado1"
//     :segundaEntrada
//     ?"acceso denegado2"
//     :"acceso permitido"

//     console.log(acceso)





let edad = prompt('Ingrese su edad:');;
let url = 
    // edad > 18
    // ?(alert("Ok!"),
    // "siguiente.html")
    // :(alert("Menor de edad"),
    // "noAcceso.html");

if(edad > 18){
    url = alert("Ok!"),
    "siguiente.html"
}else if(edad < 18){
    url = (alert("Menor de edad"),
    "noAcceso.html")
}


location.assign(url);