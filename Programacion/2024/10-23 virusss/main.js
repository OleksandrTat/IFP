// adobe color


    function getRandomColors(){
        let colors = ['#C9BDA7', '#A19682', '#F5D8A2', '#75674B', '#4A3C23', '#332710']

        let color = colors[Math.floor(Math.random()*6)]
        return color
        // return це потрібне для того щоб зміна не лишалась тільки в функції, а могли використовувати і поза нею
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    const squareSize = 25

    let maxSquareWidth = Math.floor(window.innerWidth / squareSize)
    let maxSquareHeight = Math.floor(window.innerHeight / squareSize)

    console.log(maxSquareHeight)
    console.log(maxSquareWidth)
    console.log(maxSquareWidth * maxSquareHeight)

    for(let i = 0; i < maxSquareWidth * maxSquareHeight; i++){
        let square = document.createElement('div')
        square.className = 'square'
        square.style.backgroundColor = getRandomColors();
        document.body.appendChild(square)
    }

    