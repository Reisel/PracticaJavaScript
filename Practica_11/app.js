var storage = localStorage;

var clave = document.querySelector("#clave")
var valor = document.querySelector("#valor")
var tipo = document.querySelector("#tipo")

var btn_compatibilidad = document.querySelector("#compatibilidad")
var btn_guardar = document.querySelector("#guardar")
var btn_refrescar = document.querySelector("#refrescar")
var btn_eliminar = document.querySelector("#eliminar")


tipo.addEventListener('change',() =>{
    storage = (tipo.value === 'local')?localStorage:sessionStorage
})

btn_guardar.addEventListener('click',function(){
    if(clave.value === '' || valor.value === ''){
        agregarMensaje('Debe completar ambos campos')
        return false;
    }

    storage.setItem(clave.value,valor.value)
    agregarMensaje(`Valor guardado:${clave.value} = ${valor.value} en el storage del tipo ${tipo.value}`)
    limpiar()
})

function limpiar(){
    clave.value = ''
    valor.value = ''
}

function agregarMensaje(mensaje){
    var contenedorMensaje = document.querySelector("#mensajes")
    contenedorMensaje.innerHTML = mensaje
    setTimeout(function(){
        contenedorMensaje.innerHTML = ''
    },5000)
}


btn_compatibilidad.addEventListener('click',() =>{
    if(window.localStorage && window.sessionStorage){
        agregarMensaje("Tu navegador soporta la Storage API")
    }else{
        agregarMensaje("Tu navegador NO soporta la Storage API")
    }
})

function refrescarTodo(){
    refrescar(document.querySelector("#almacenamientoLocal"),localStorage)
    refrescar(document.querySelector("#almacenamientoSesion"),sessionStorage)
}

function refrescar(area,storage){
    area.innerHTML = ''
    for(var i = 0; i< storage.length;i++){
        var clave = storage.key(i)
        var valor = storage.getItem(clave)
        area.innerHTML += `${clave} = ${valor} \n`
    }
}

btn_refrescar.addEventListener('click',function(){
    refrescarTodo()
})

btn_eliminar.addEventListener('click',function(){
    if(clave.value === ''){
        agregarMensaje('Para eliminar un registro del storage debe ingresar el value')
        return false;
    }

    storage.removeItem(clave.value)
    limpiar()
    agregarMensaje('El registro fue eliminado del storage')
    refrescarTodo()
})

window.addEventListener('storage',() => refrescarTodo())

