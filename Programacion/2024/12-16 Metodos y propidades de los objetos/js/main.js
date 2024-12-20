let producto = {
    nombre: "camisa",
    precio: parseInt(Math.random() * 23),
    stock: parseInt(Math.random() * 124),
    size: "s, m, l, xl"
};

for(i=0; i<=10; i++){
    for(let key in producto){
        console.log(`${key}: ${producto[key]}`)
    };
    producto.precio = parseInt(Math.random() * 23),
    producto.stock = parseInt(Math.random() * 124),
    console.log("");

}

// https://talentarena.tech/es/