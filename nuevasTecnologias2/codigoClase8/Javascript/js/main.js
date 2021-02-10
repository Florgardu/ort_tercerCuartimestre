'use strict'

console.log(`
/* --------------------------------------------------------------- */
/*    Funciones constructoras y clases (Herencia y composición)    */
/* --------------------------------------------------------------- */
`)
console.log('/* Herencia y composición en JS5 */')

/* --------------------------------------- */
function PersonaJS5(nombre, edad) {
    //propiedades instancia
    this.nombre = nombre
    this.edad = edad
    PersonaJS5.contador++
}
//propiedades prototipo
PersonaJS5.prototype.saludo = function() {
    console.log('Hola!')
}
PersonaJS5.contador = 0     //Propiedad estática

//instancia
let juanJS5 = new PersonaJS5('Juan',23)
console.log(juanJS5)


/* --------------------------------------- */

function EmpleadoJS5(nombre,edad,sueldo) {
    /* -------------- COMPOSICIÓN ---------------- */
    PersonaJS5.call(this,nombre,edad)
    /* ------------------------------------------- */
    this.sueldo = sueldo
}

/* --------------------- HERENCIA ------------------------ */
EmpleadoJS5.prototype = Object.create(PersonaJS5.prototype)
/* ------------------------------------------------------- */
EmpleadoJS5.prototype.trabajar = function() {
    console.log('trabajando...')
}

//instancia
let empleadoJS5 = new EmpleadoJS5('Juan',23,10000)
console.log(empleadoJS5)

/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
console.log('\n/* Herencia y composición en ES6 */')

class PersonaES6 {
    constructor(nombre,edad) {
        //propiedades instancia
        this.nombre = nombre
        this.edad = edad
        PersonaES6.contador++
    }
    static contador = 0 //propiedad estática
    //propiedades prototipo
    saludo() {
        console.log('Hola!')
    }
}
//instancia
let juanES6 = new PersonaES6('Juan',23)
console.log(juanES6)

/* ------------------------------------------------------- */
/* --------------------- HERENCIA ------------------------ */
class EmpleadoES6 extends PersonaES6 {
/* ------------------------------------------------------- */
    constructor(nombre,edad,sueldo) {
        /* -------------- COMPOSICIÓN ---------------- */
        super(nombre,edad)
        /* ------------------------------------------- */
        this.sueldo = sueldo
    }
    trabajar() {
        console.log('trabajando...')
    }
}
//instancia
let empleadoES6 = new EmpleadoES6('Juan',23,10000)
console.log(empleadoES6)

console.log(`
/* ---------------------------------- */
/*   Funciones autoinvocadas (IIFE)   */
/*   I : INMEDIATLY                   */
/*   I : INVOKED                      */
/*   F : FUNCTION                     */
/*   E : EXPRESSION                   */
/* ---------------------------------- */
`)

;
(function(num) {
    'use strict'
    var clave = 1234
    //console.log(clave)
    console.log(num)
})(33)

