const password = 9091;
let intentos = 3;
let probueba = null
let hack = 0


while(intentos > 0){
    probueba = hack
    hack--

    if(password === probueba){
        console.log("Felicidades!!");
        break
    }
    else{
        intentos++
        if(intentos >= 1){
            console.log("Te quedan " + intentos + " intentos");
        }
        else{
            console.log("Has perdido todo tu dinero");
        }
    }
}

