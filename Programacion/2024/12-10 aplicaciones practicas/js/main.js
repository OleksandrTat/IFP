// APLICACIONES PRACTICAS DE LAS CLASES EN JS

// 1- MODELADO DE DATOS Y LOGICAS DE PRODUCTO
// 2- CREACION DE INTERFACES INTERACTIVOS FRONTEND
// 3- DESSAROLLO DE VIDEOJUEGOS
// 4- APIS Y SERCICION BACKEND
// 5- REUTILIZACION DE CODIGO Y HERENCIAS


// 1
// class Producto{
//     constructor(nombre,precio,stock) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.stock = stock;
//     }

//     aplDescuento(procentaje){
//         this.precio = this.precio * (procentaje / 100);
//         console.log("Precio con descuento: " + this.precio);
//     }

//     vender(cantidad){
//         if(this.stock >= cantidad){
//             this.stock -= cantidad;
//             console.log("Cantidad: " + cantidad + ". Por el precio: " + this.precio);
//         }
//         else{
//             console.log("No tenemos tanto(s)" + this.nombre);
//         }
//     }
// }


// const Producto1 = new Producto("MacBook", 5000, 5);
// const Producto2 = new Producto("Ordenador", 3999, 100);

// Producto1.aplDescuento(45);
// Producto2.vender(3);



// 2
// class Boton{
//     constructor(Mensaje){
//         this.Mensaje = Mensaje;
//     }

//     renderizar(){
//         const button = document.createElement("button");
//         button.innerText = this.Mensaje
//         button.onclick = () => alert("Has hecho click en "+ this.Mensaje)
//         document.body.appendChild(button)
//     }
// }

// const Mensaje1 = new Boton("Hola");
// const Mensaje2 = new Boton("Adios");

// Mensaje1.renderizar();
// Mensaje2.renderizar();


// 3
class Personaje{
    constructor(nombre, vida, fuerza, reper){
        this.nombre = nombre;
        this.vida = vida;
        this.fuerza = fuerza;
        this.reper = reper;
    }

    recibirDano(cant){
        
        if(this.reper == false){
            this.vida -= cant;
        }
        else if(this.reper == true){
            console.log("No se puede dañarse es REPER ANDREU")
        }

        if(this.vida <=0){
            this.vida = 0;
            console.log(this.nombre + " pierde")
        }
        else{
            console.log(this.nombre + " tiene " + this.vida + " HP")
        }
    }

    atacar(objetivo){
        console.log(this.nombre + " VS " + objetivo.nombre)
        console.log(this.nombre + " quita "+ this.fuerza + " a " + objetivo.nombre)
        objetivo.recibirDano(this.fuerza)
    }
}

const heroe = new Personaje("Andreu", 100, 100, true);
const enamigo1 = new Personaje("Illias", 101, 10, false);
const enamigo2 = new Personaje("Javi", 100, 30, false);

heroe.atacar(enamigo1)
console.log("")
enamigo2.atacar(heroe)





new Date().getFullYear();
this.Date = Date
console.log(Date)