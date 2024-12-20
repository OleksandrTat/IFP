function back (){
    location.assign("index.html");
};


const cont = document.getElementById("cont");

let e = 0
let counter = 10;
let n = 79.9

function xd(){
    const button = document.getElementById("button");
    button.style.position = "absolute";
    if (e < 1){
        button.style.left = "0px";
        e = 1
        counter -= 1;
        console.log(counter)
    }
    else if(e = 1){
        button.style.left = n+"vw";
        e = 0
        counter -= 1;
        console.log(counter)
    }
    
    if(counter <= 0){
        n = 0
        let counter = 0;
    }
    
}