/*
Objetos **
Encapsular
Heredar (prototipos)
Constructores

** ES2015 => clases y objetos 
   ES5 => objetos

   Objetos => Es un conjunto de pares clave: valor. Encerrados entre llaves {}
   clave => string
   valor => cualquier tipo de dato soportado por JS. 
*/

let humano = {
    nombre: "Jose",
    apellido: "Perez",
    edad: 30,
    "apodo loco": "soy un apodo",
    nombreCompleto: function(){
        return `${this.nombre} ${this.apellido}`
    }
}

console.log(humano.nombre)
console.log(humano.nombreCompleto())
console.log(humano.nombreCompleto)

var nombreLoco = humano.nombreCompleto;

let otroHumano = {
    nombre: "Andrea",
    apellido: "Rodriguez"
}


let nombreLocoHumano = nombreLoco.bind(otroHumano)


humano.obtenerEdad = function(){
    return this.edad
}

humano["propiedad que va a ser borrada"] = "Me van a borrar"


let persona = new Object();

let personaNula = Object.create(null)

function PersonaConstructor(nombre,apellido){
    this.nombre = nombre,
    this.apellido = apellido,
    this.nombreCompleto = function(){
        return `${this.nombre} ${this.apellido}`
    }
}
var personaConst = new PersonaConstructor("Amalia","Re")

class PersonaEs6 {
    nombre;
    apellido;
    constructor(n,a){
        this.nombre = n;
        this.apellido = a;
    }
}

var personaOtra = new PersonaEs6()
personaOtraDos = personaOtra

//console.clear()

var PersonaProt = Object.create(null)
PersonaProt.nombre = "Mariana"

prototipo = {
    nombreCompleto: function(){
        return `${this.nombre} ${this.apellido}`
    }
}

let PersonaProtDos = Object.create(prototipo)

PersonaProtDos.nombre = "Pedro"
PersonaProtDos.apellido = "Gonzalez"
PersonaProtDos.saludar = function(){
    return "Hola a todas y a todos!!!!"
}

var PersonaProtTres = Object.create(PersonaProtDos)
PersonaProtTres.altura = 1.96
/*
Data Descriptors:
1 - configurable
2 - enumerable
3 - value
4 - writable

Los Access descriptors: 
    - get
    - set
*/

var o = {}
// o.atributo1 = ...
Object.defineProperty(o,'atributo1',{
    value: 'Hola soy el atributo UNO',
    writable: true,
    enumerable: true,
    configurable: true
})

Object.defineProperty(o,'atributo2',{
    get() {return atributo2Value},
    set(nuevoValor){
        if(!Number(nuevoValor)){
            atributo2Value = 0
        }else{
            atributo2Value = nuevoValor
        }
    },
    enumerable: true,
    configurable: true
})

Object.defineProperty(o,'atributo3',{
    value: "Soy un valor estático",
    writable: false
})



/*
<?php 
class Persona {
    private $nombre;
    private $apellido;
    public function __construct($a,$p){
        $this->nombre = $a;
        $this->apellido = $p;
    }
}

$personaObj = new Persona("Pedro","P")

public class PersonaJava{
    public PersonaJava(parametros){

    }
    public PersonaJava(parametros,parametros){
        
    }
}


*/



