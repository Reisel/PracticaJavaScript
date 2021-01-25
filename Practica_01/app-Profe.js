var var1 = 234234;
console.log(typeof var1)
// int var1 = 5415;

var var2 = 12e4;
console.log(var2);

var3 = true;
var4= false;
if(var3 || var4){
    console.log("Es verdad!!!")
}else{
    console.log("No es verdad :(")
}

console.log(0/0)

var4 = 12
var5 = "12"

if(var4 === var5){
    console.log("var4 y var5 son iguales")
}else{
    console.log("var4 y var5 son diferentes")
}
/*
==      ===

*/


/*
number
string
boolean

objetos
funciones
array
*/

var variableNula = null
var variableUndefined = undefined
let numeroLoco = 12
let cincoLoco = "5"
let cincoLocoLetras = "cinco"

let mensaje = "Hola "
let mensajeNull = null

let nombreComp = null || "Andrea"
let otroNombreComp = "Ramon" || "Andrea"

//JSON
//Rest

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

function FuncionLoca(){
    console.log('Funcion desde JS')
}

FuncionLoca()
let resultado = Sumar(43,232)
console.log(resultado)

function Sumar(n1,n2){
    //let resultado = n1 + n2
    return n1 + n2;
    return n1 * n2;
    console.log(324423)
}

function cambiarTitulo(){
    let titulo = window.document.querySelector('h1')
    titulo.innerHTML = "Titulo modificado desde JS"
}

function cambiardepagina(){
    window.location = "destino.html"
}

let titulo = document.querySelector("h1").innerHTML;
document.querySelector("h1").innerHTML = "Otro titulo";




/*
DOM => DOCUMENT OBJECT MODEL (HTML) => document
BOM => BROWSER OBJECT MODEL (NAVEGADOR) => window
window.document

*/





/*
public class Persona {
    private String nombre = "Marcos";
    private ArrayList<String> intereses = new ArrayList<String>()
}
*/



