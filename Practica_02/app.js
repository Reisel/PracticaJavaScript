var botones = document.querySelectorAll('button');
console.log(botones)

botones[1].onclick = saludar;

function saludar(){
    console.log('Método saludar: Que tal como va?')
}

/*botones[2].addEventListener('click',function(){
    console.log("Hola desde una función anónima!")
})*/
//botones[2].addEventListener('click',() => console.log("Hola desde una función anónima!"))


//var listenerMio = () => console.log("Hola desde una función NO anónima!");
var listenerMio = function(){
    console.log("Hola desde una función NO anónima!")
}
botones[2].addEventListener('click',listenerMio)
botones[2].addEventListener('mousemove',() => console.log("Pasate el mouse por arriba"))

saludar();

function sumatoria(n1,n2){
    var resultado = n1 + n2
    return resultado
}

var sumaLoca = sumatoria;
var otraSumaLoca = sumatoria(3,4)

document.querySelector("#select_loco").addEventListener('change',() => {
    var seleccion = document.querySelector("#select_loco").value
    console.log(seleccion)
})

//emmet

document.querySelector("#form_ejemplo").addEventListener('submit',(event) => {
    event.preventDefault()

    console.log(event.target)
    //document.querySelector("#form_ejemplo").submit()
})

botones[3].addEventListener('click',() => {
    document.querySelector('h1').innerHTML = "Titulo cambiado desde JS"
    window.document.body.style.background = 'blue'
    window.location = 'https://ole.com.ar'
})

resultado = 0;
function sumarGlobal(n1,n2){
    //resultado = resultado + n1 + n2;
    var result = n1 + n2;
    return result;
}

function imprimirResultado(){
    console.log(sumarGlobal(5,8))
}

botones[4].addEventListener('click',crearFila);

idTabla = 0;
function crearFila(){
    console.clear()
    var nodoTr = document.createElement('tr');
    idTabla = idTabla + 1
    
    //nodoTr.classList.add('fila_dinamica')
    var nodoTdNombre = document.createElement('td');
    nodoTdNombre.id = 'fila_' + idTabla
    nodoTdNombre.classList.add("clase_hola")
    var nodoTdApellido = document.createElement('td');
    var nodoTdEdad = document.createElement('td');
    nodoTdNombre.innerHTML = 'Roberto'
    nodoTdApellido.innerHTML = 'Perez'
    nodoTdEdad.innerHTML = 40

    nodoTr.appendChild(nodoTdNombre)
    nodoTr.appendChild(nodoTdApellido)
    nodoTr.appendChild(nodoTdEdad)

    document.querySelector("#tableBody").appendChild(nodoTr)
}

/*document.querySelector(".clase_hola").addEventListener('click',function(e){
    console.log(e.target.id)
})*/

document.addEventListener('click',function(event){
    console.log(event.target.classList.value)
    //console.log(typeof event.target.classList)
    /*var arrayNuevo = [{id:1,nombre:'algo'},{id:2,nombre:'algo'}]
    arrayNuevo.map(function(fila,indice){
        console.log(fila)
    })
    console.log(typeof arrayNuevo)*/
    if(event.target.classList.value == 'clase_hola'){
        console.log(event.target.id)
    }
})




/*
    <tr>
        <td>contenido</td>
        <td>contenido</td>
        <td>contenido</td>
    </tr>
*/