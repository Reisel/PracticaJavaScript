var var1 = 23456;
console.log(typeof var1);

var3 = 12;
var4 = "12";
if(var3 === var4){
    console.log("var3 y var4 son iguales")
}else{
    console.log("var3 y var4 son diferentes")
}

var variableNula = null
var variableUndefined = undefined
let numeroLoco = 12
let cincoLoco = "5"
let cincoLocoLetras = "cinco"

let mensaje = "Hola "
let mensajeNull = null

let nombreComp = null || "Andrea"
let otroNombreComp = "Ramon" || "Andrea"

let Persona = {
    "nombre": "Marcos",
    "edad": 45,
    "intereses": ["interes1","interes2"],
    "direccion": {
        "calle": "Rio de Janeiro 21",
        "localidad": "caba",
        "provincia": "Buenos Aires"
    },
 }
 
 console.log('Hola soy la persona ' + Persona.nombre + ' y tengo ' +
 Persona.edad + ' años')
 
 console.log(`Hola soy la persona ${Persona.nombre} y tengo ${Persona.edad} años`)
  
 console.log("Hola \"Mundo\" \n Aca estoy en otro renglón")

 FuncionLoca()
let resultado = Sumar(43,232)
 console.log(resultado)

function Sumar(n1,n2){
    //let resultado = n1 + n2
    return n1 + n2;
    return n1 * n2;
    console.log(324423)
}