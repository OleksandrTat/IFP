const alumnos = [
    "Ana", "Carlos", "María", "José", "Lucía", 
    "Sofía", "Jorge", "Laura", "Pedro", "Camila", 
    "Mateo", "Valeria", "Andrés", "Fernanda", "Luis"
  ];

const poblaciones = [
    "Madrid", "Barcelona", "Valencia", "Sevilla", "Zaragoza",
    "Málaga", "Murcia", "Palma de Mallorca", "Bilbao", "Alicante",
    "Córdoba", "Valladolid", "Vigo", "Gijón", "Granada",
    "Santander", "Toledo", "Salamanca", "Almería", "Tarragona",
    "Oviedo", "San Sebastián", "La Coruña", "Pamplona", "Badajoz",
    
    "Kyiv", "Kharkiv", "Odesa", "Dnipro", "Lviv",
    "Zaporizhzhia", "Kryvyi Rih", "Mykolaiv", "Mariupol", "Vinnytsia",
    "Chernihiv", "Poltava", "Sumy", "Ivano-Frankivsk", "Ternopil",
    "Zhytomyr", "Chernivtsi", "Kherson", "Rivne", "Lutsk",
    "Uzhhorod", "Kramatorsk", "Melitopol", "Sloviansk", "Berdyansk"
  ];

const animales = [
    "El león de", "La tigresa de", "El elefante de", "La jirafa de", "El rinoceronte de",
    "La pantera de", "El jaguar de", "La hiena de", "El búho de", "La lechuza de",
    "El águila de", "El cóndor de", "El flamenco de", "La gaviota de", "El pingüino de",
    "La tortuga de", "El cocodrilo de", "El caimán de", "El tiburón de", "La ballena de",
    "El delfín de", "El caballo de", "La cebra de", "El camello de", "La alpaca de",
    "El murciélago de", "La ardilla de", "El zorro de", "La loba de", "El oso de",
    "El lobo de", "El ciervo de", "La gacela de", "El pato de", "La gallina de",
    "El gallo de", "El pavo de", "El ganso de", "La abeja de", "La avispa de",
    "La hormiga de", "El grillo de", "El saltamontes de", "La mariposa de", "La polilla de",
    "El escorpión de", "El caracol de", "La cigarra de", "El pulpo de", "El cangrejo de"
  ];

function generarApodo(){
    let numeroDeAlumno = Math.floor(Math.random() * alumnos.length)
    let numeroDePoblacion = Math.floor(Math.random() * poblaciones.length)
    let numeroDeAnimal = Math.floor(Math.random() * animales.length)
    
    let primero = document.getElementById("primero")
    primero.innerHTML = alumnos[numeroDeAlumno] + " " + animales[numeroDeAnimal] + " " + poblaciones[numeroDePoblacion]


    numeroDeAlumno = Math.floor(Math.random() * alumnos.length)
    numeroDePoblacion = Math.floor(Math.random() * poblaciones.length)
    numeroDeAnimal = Math.floor(Math.random() * animales.length)

    let segundo = document.getElementById("segundo")
    segundo.innerHTML = alumnos[numeroDeAlumno] + " " + animales[numeroDeAnimal] + " " + poblaciones[numeroDePoblacion]
  }

  