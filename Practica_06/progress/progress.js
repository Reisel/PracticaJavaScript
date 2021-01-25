/*
-loadstart
-progress
-error
-load
-loadend

1- loadstart
2- progress
3- load
4- loadend
*/


const botonOk = document.querySelector('.xhr-success')
const botonError = document.querySelector('.xhr-error')
const botonAbort = document.querySelector('.xhr-abort')
const log = document.querySelector("#log-evento")


function manejarEvento(evento){
    log.textContent = log.textContent + ` ${evento.type}: ${evento.loaded} Bytes transferidos\n`
}


function addListeners(xhr){
    xhr.addEventListener('loadstart',manejarEvento)
    xhr.addEventListener('progress',manejarEvento)    
    xhr.addEventListener('load',manejarEvento)
    xhr.addEventListener('loadend',manejarEvento)
    xhr.addEventListener('error',manejarEvento)
    xhr.addEventListener('abort',manejarEvento)
}

//funcion ajax
function armarXHR(url){
    const xhr = new XMLHttpRequest()
    addListeners(xhr)
    xhr.open('GET',url)
    xhr.send(null)
    return xhr;
}

//botonOk.addEventListener('click',armarXHR('imagen.jpg'))
//botonOk.onclick = armarXHR
botonOk.addEventListener('click',function(){
    log.textContent = ''
    armarXHR('imagen.jpg')
})
botonError.addEventListener('click',function(){
    log.textContent = ''
    armarXHR('https://urlquenoexiste.com')
})
botonAbort.addEventListener('click',function(){
    log.textContent = ''
    armarXHR('imagen.jpg').abort()
})



