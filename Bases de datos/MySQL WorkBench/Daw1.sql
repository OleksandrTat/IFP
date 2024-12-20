CREATE DATABASE Daw1;

-- DROP DATABASE Daw1;
-- SELECT Id_estudiante, nombre, edad, curso, email FROM estudiantes;
-- ADD Añadir, DROP eliminar, MODIFY modificar
-- ALTER TABLE estudiantes
-- DROP COLUMN email ;

-- COMENTARIO DE LINEA
/* COMENTARIO SERRADO*/

USE Daw1;

CREATE TABLE estudiantes(
	Id INT(1) PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    fecha_nacimiento DATE NOT NULL, /* Cuidado con FORMATO de la fecha - INCLUID EN EJEMPLO COMENTADO - dd/mm/año*/
    email VARCHAR(100) UNIQUE NOT NULL
);

SELECT * FROM estudiantes;

ALTER TABLE estudiantes
MODIFY COLUMN email VARCHAR(90);

ALTER TABLE estudiantes
ADD COLUMN id_curso INT,
ADD FOREIGN KEY (id_curso) REFERENCES cursos(id);

INSERT INTO estudiantes (nombre, fecha_nacimiento, email, id_curso) 
VALUES ("Oleksandr", "2007/09/21", "blablabla@gmail.com", 1);




CREATE TABLE cursos(
	id INT(2) PRIMARY KEY AUTO_INCREMENT,
    Nombre_curso VARCHAR(50) NOT NULL UNIQUE,
    Aula VARCHAR(4) NOT NULL UNIQUE
);

SELECT * FROM cursos;


INSERT INTO cursos (Nombre_curso, Aula) 
VALUES ("DAW1", "A001");

-- INSERT 1) INDEVIDUALES 2) GLOBALES



-- consulta para obtener el nombre del estudiante su fecha de naciminto y el aula asignada

SELECT estudiantes.nombre, estudiantes.fecha_nacimiento, cursos.Aula 
FROM estudiantes JOIN cursos ON estudiantes.id = cursos.id;





