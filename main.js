//Crear la clase Persna, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.

class Persona  {
    constructor(nombre, edad, genero,){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    obtDetalles(){
        console.log(` ${this.nombre} ${this.edad}  ${this.genero}`);
    }
}
let miPersona = new Persona ("felipe", "23", "MASCULINO");

miPersona.obtDetalles();


/*Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.*/

class Estudiante extends Persona{
    constructor(nombre, edad, genero, curso, grupo){
        super(nombre, edad, genero)
        this.curso = curso;
        this.grupo = grupo;
    }
    registrar(){
        console.log(`${this.curso} ${this.grupo}`)
    }
};
let miEstudiante = new Estudiante("felipe", "23", "MASCULINO","1A", "ACDC")
miEstudiante.registrar();

/*Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.*/

class Profesor extends Persona {
    constructor(nombre, edad, genero, curso, grupo, asignatura, nivel){
        super(nombre, edad, genero, curso, grupo)
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar(){
        console.log(`${this.nivel} ${this.asignatura}`)
    }
};
let miProfesor = new Profesor ("felipe", "23", "MASCULINO","1A", "ACDC", "alto", "matematicas")

miProfesor.asignar()


