/*
Scope = 
Accesibilidad de las variables. El scope determina la visibilidad de las 
variables y de otros recursos en distintas areas de nuestro código
Nos da un determinado nivel de seguridad
Hay dos tipos de scopes:
- Global scope
- Local scope

Las variables definidas dentro de una función estan dentro del scope local
en cambio las variables definidas por fuera, pertenecen al scope global.
Cada vez que se invoca una funcion, se crea un nuevo scope
*/

//'use strict'
let nombre = 'Ulrich'

var objeto = {}
Object.defineProperty(objeto,"prop1",{
    value: 'Soy un valor de lectura',
    writable: false,
    configurable: false
})

objeto.prop1 = 23423423

/*function saludar(a,a,b){
    console.log(a,a,b)
}*/


function logNombre(){
    console.log(nombre)
}

var apellido = 'Perez'
function logApellido(){
    var apellido = "Rodriguez"
    console.log(apellido)
    document.apodo = "Pepe"
}

console.log(document.apodo)

var condicion = true
if(condicion){
    var variable1 = "soy una variable"
}

/*
var var1 = "Variable con var"
let var2 = "Variable con let"
const var3 = "Variable con const"
*/

if(condicion){
    var var1 = "Variable con var"
    let var2 = "Variable con let"
    const var3 = "Variable con const"
}

delete objeto.prop1
function estricta(){
    
    objeto.prop1 = 23423423
}

console.clear()


function introduccion(nombre,interes){
    console.log(`Hola yo soy ${nombre} y me gusta ${interes}`)
    console.log(`El valor de this es ${this}`)
}

const Dado = function(lados = 5){
    this.lados = lados
    this.rodar = function(){
        return Math.floor(this.lados * Math.random() + 1)
    }
}

const dadoRojo = new Dado()

const dadoAzul = new Dado(7)

const dadoVerde = new dadoRojo.constructor(10)

class Ejemplo{
    constructor(nombre,apellido){
        this.nombre = nombre
        this.apellido = apellido
    }
}

class Tortuga {
    constructor(nombre){
        this.nombre = nombre
    }

    saludar(){
        return `Hola amigo, yo soy ${this.nombre}`
    }

    atacar(){
        return `Siente el poder de mi ${this.arma}`
    }
}

Tortuga.prototype.arma = "Pies"

Tortuga.prototype.atacar = function(){
    return `Siente el poder de mi ${this.arma}`
}

const Producto = function(producto,precio){
    this.producto = producto,
    this.precio = precio,
    this.precio = function(){
        return this.precio * this.iva
    }
}

Producto.prototype.iva = 1.21

var leche = new Producto('leche',45)
var pan = new Producto('pan',70)
var fideos = new Producto('fideos',40)
//var detergente = Object.assign({},fideos)
pan.iva = 1.14





let conejo = {}
conejo.hablar = function(linea){
    console.log(`El conejo dijo ${linea}`)
}

function hablar(linea){
    console.log(`El conejo ${this.type} dijo ${linea}`)
}

let conejoBlanco = {type: 'blanco',hablar}
let conejoNegro = {type: 'negro',hablar}

hablar.call(conejoNegro,"No me hace laburar ni un mago")

function Pajaro(tipo,color){
    this.tipo = tipo
    this.color = color
    this.huevos = 0
    
    this.volar = function(){
        return `El ${this.tipo} ${this.color} está volando`
    }

    this.caminar = function(){
        return `El ${this.tipo} ${this.color} está caminando`
    }
}

Pajaro.prototype.ponerHuevos = function(){
    this.huevos++
    return `El ${this.tipo} ${this.color} está poniendo huevos`
}
//El prototype no se hereda con el call
function Loro(tipo,color){
    Pajaro.call(this,tipo,color)
    this.hablar = function(){
        return `El ${this.tipo} ${this.color} está hablando`
    }
}