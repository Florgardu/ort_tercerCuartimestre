var a = 5
var b = 6
var c = a + b
console.log(c)

const mensaje = 'Hola Mundo'

const sumar = (a,b) => a + b
const dobleDe = a => 2*a

let op1 = 15
let op2 = 6
console.log(`La suma de ${op1} más ${op2} es ${sumar(op1,op2)}`)
console.log(`Doble de ${op1} es ${dobleDe(op1)}`)

/* ------------------------------------------------------- */
/*              VARIABLES Y TIPOS DE DATOS                 */
/* ------------------------------------------------------- */
//1) Tipo primitivos (number, boolean, string) -> Copia X Valor
//2) Tipo Objeto (array, object, function)     -> Copia X Referencia

console.log('\n/* VARIABLES Y TIPOS DE DATOS */')
//1)
//tipo number
var an = 1
var bn = an
an = 10
console.log(an, typeof an)
console.log(bn, typeof bn)

//tipo boolean
var ab = true
var bb = ab
ab = false
console.log(ab, typeof ab)
console.log(bb, typeof bb)

//tipo string
var as = 'Hola'
var bs = as
as = 'Mundo'
console.log(as, typeof as)
console.log(bs, typeof bs)

//2)
//tipo array
var aa = [1,2,3]
var ba = aa
aa[0] = 11
console.log(aa, typeof aa, Array.isArray(aa))
console.log(ba, typeof ba, Array.isArray(ba))

//tipo object
var ao = {x:1}
var bo = ao
ao.x = 11
console.log(ao, typeof ao, Array.isArray(ao))
console.log(bo, typeof bo, Array.isArray(bo))


/* ------------------------------------------------------- */
/*             FUNCIONES CONSTRUCTORAS EN JS               */
/* ------------------------------------------------------- */

console.log('\n/* TIPOS DE DATOS APLICADOS EN FUNCIONES */')
//1) Tipo primitivos (number, boolean, string) -> Copia X Valor
//2) Tipo Objeto (array, object, function)     -> Copia X Referencia

//1)
var fecha = '2/9/2020'
function agregarHoraAfecha1(f) {
    f = f + ' 20:24:00'
    return f
}
console.log(fecha)
let fechayHora = agregarHoraAfecha1(fecha)
console.log(fechayHora)
console.log(fecha)

//2)
var fechaObj = {f: '2/9/2020'}
function agregarHoraAfecha2(fobj) {
    let clave = 'f'
    fobj[clave] = fobj[clave] + ' 20:24:00' //notación corchete (con variable)
    //fobj['f'] = fobj['f'] + ' 20:24:00'   //notación corchete
    //fobj.f = fobj.f + ' 20:24:00'         //notación punto
    return fobj
}
console.log(fechaObj)
let fechayHoraObj = agregarHoraAfecha2(fechaObj)
console.log(fechayHoraObj)
console.log(fechaObj)

/* ------------------------------------------------------------------- */

console.log('\n/* FUNCIONES CONSTRUCTORAS */')

console.log('\n/* 1) Las funciones en JS son objetos __proto__ */')
function foo() {
    console.log('Soy foo')
}
foo()
console.log(foo)
console.dir(foo)
console.dir({})

foo.x = true
console.log(foo.x)

/* ----------------------------------------------------- */
console.log('\n/* 2) Las funciones en JS son variadicas */')
function suma(a=0,b=0) { //valores de los parametros por default
    console.log(a,b)
    return a + b
}
console.log(suma(5,6,7))

/* ----------------------------------------------------- */
console.log('\n/* 3) Las funciones en JS tienen ámbito ó scope */')

var global = 'global'
function foo2(arg2) {
    var local2 = 'local2'
    console.log(global, local2, arg2)//, arg3) //, local3) -> error de scope
}

function foo3(arg3) {
    var local3 = 'local3'
    console.log(global, local3, arg3)//), arg2)//, local2) -> error de scope
}

console.log(global)
foo2('arg2')
foo3('arg3')
//console.log(local2)
//console.log(local3)
//console.log(arg2)
//console.log(arg3)

/* ----------------------------------------------------------------- */
console.log('\n/* 4) Las funciones en JS tienen closure (clausuras) */')

function externa(x) {
    //console.log(x)
    //return x
    let z = 5
    return function interna(y) {
        console.log(y+x+z)
    }
}

var resultado = externa(50)
console.log(resultado)
resultado(10)
//console.log(x)
//console.log(y)
console.dir(resultado)

/* ----------------------------------------------------------------- */
console.log('\n/* 5) Las funciones en JS tienen contexto (this) */')

function foo4() {
    console.log(this)
}

foo4()

var nombre = 'Pablo'
var apellido = 'Gomez'
var persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    saludo: function() {
        console.log(this)
        console.log(this.nombre, this.apellido)
    }
}

//saludo ejecutado en el contexto de persona
persona.saludo()

const saludoExt = persona.saludo
//saludo ejecutado en el contexto global (window)
saludoExt()
saludoExt.call(persona)

/* ------------------------------------------------ */
console.log('\n/* 6) funciones: formas de ejecución */')

function ctx(a,b) {
    console.log(this,a,b)
}

ctx(5,6)                        //forma normal de ejecución
ctx.apply({x:1},[5,6])          //forma de ejecución utilizando el método apply
ctx.call({x:1},5,6)             //forma de ejecución utilizando el método call
let ctxBind = ctx.bind({x:1})   //forma de ejecución utilizando el método bind
ctxBind(5,6)

//otro ejemplo con bind
var x = 9
var modulo = {
    x : 81,
    getX: function() {
        return this.x
    }
}

console.log(modulo.getX())

var getX = modulo.getX
console.log(getX())

var getXBind = getX.bind(modulo)
console.log(getXBind())

/* ------------------------------------------------------ */
console.log('\n/* Uso de una función para crear objetos */')

console.log('\n/* 1) Creando un objeto literal */')
var persona1 = {
    nombre : 'Juan',
    edad : 23
}
console.log(persona1)
console.log(persona1.hasOwnProperty('nombre'))
console.log(persona1.hasOwnProperty('edad'))
console.log(persona1.hasOwnProperty('apellido'))

console.log('\n/* 2) Creando un objeto utilizando el método create de Object */')
var persona2 = Object.create(Object.__proto__.__proto__, {
    nombre : {
        value : 'Juan'
    },
    edad: {
        value : 23,
        writable : true,
        configurable : true,
        enumerable : true
    }
})
console.log(persona2)
console.log(persona2.hasOwnProperty('nombre'))
console.log(persona2.hasOwnProperty('edad'))
console.log(persona2.hasOwnProperty('apellido'))

console.log('\n/* 3) Creando un objeto utilizando funciones constructoras con new */')

function Persona(nombre,edad) {
    //console.log(this)
    this.nombre = nombre
    this.edad = edad
}

//--------------------------------------------------------------------
// new es el constructor de objetos -> ejecuta las siguientes acciones
//--------------------------------------------------------------------
//1) crea un objeto vacío -> p = {}
//2) ejecuta la función constructora (Persona) en el contexto de ese objeto vacío
//    -> Persona.call(p,nombre,edad)
//3) retornar ese objeto p -> var persona3 <- p <- new Persona()
//--------------------------------------------------------------------
var persona3 = new Persona('Juan', 23)
console.log(persona3)
console.log(persona3.hasOwnProperty('nombre'))
console.log(persona3.hasOwnProperty('edad'))
console.log(persona3.hasOwnProperty('apellido'))

