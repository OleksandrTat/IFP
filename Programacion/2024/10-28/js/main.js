function updateBackground(){
    document.body.style.backgroundImage = ""

    const optionBackground = document.getElementById("backgroundSelection").value;

    switch (optionBackground) {

        case"1":
        document.body.style.backgroundImage = "url('img/flag_of_Ternopil.jpg')"
        console.log("estas en 1")
        break;

        case"2":
        document.body.style.backgroundImage = "url('img/корабель.jpg')"
        console.log("estas en 2")
        break;

        case"3":
        document.body.style.backgroundImage = "url('img/озеро.jpg')"
        console.log("estas en 3")
        break;

        case"4":
        document.body.style.backgroundImage = "url('img/театер.jpg')"
        console.log("estas en 4")
        break;

        case"5":
        document.body.style.backgroundImage = "url('img/церква.jpeg')"
        console.log("estas en 5")
        break;
    }
}

