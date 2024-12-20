for(i = 1; i <= 15; i++){
    
    if(i%3 == 0 && i%5 == 0){
        console.log(i + ". Seneca")
    }else if(i%3 == 0){
        console.log(i + ". Kafka")
    }else if(i%5 == 0){
        console.log(i + ". Kant")
    }else{
        console.log(i + ". No es divisible")
    }
    
} 