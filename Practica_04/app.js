/*
AJAX => Asynchronous Javacript XML

onreadystatechange
metodo: get/post
open -> metodo,url,?async

ReadyState:
    0 => UNSET objeto no se envio
    1 => Opend
    2 => Headers Received
    3 => Loading
    4 => Done
*/

document.addEventListener('DOMContentLoaded',function(){
    validarEmail()
})

var objAjax;

function validarEmail(){
    var email = document.querySelector('#email');
    var loading = document.querySelector('.spinner-border')
    email.addEventListener('blur',function(){
        email.classList.remove('is-valid')
        email.classList.remove('is-invalid')
        loading.classList.remove('d-none')
        llamadaAjaxEmail(email);
    })
}

function llamadaAjaxEmail(email){
    objAjax = new XMLHttpRequest();
    objAjax.onreadystatechange = responseCallback;
    var valorEmail = email.value
    objAjax.open('GET',`http://localhost:3000/?email=${valorEmail}`)
    objAjax.send(null);
}

function responseCallback(){
    email = document.querySelector("#email")
    if(objAjax.readyState === 4 && objAjax.status === 200){
        document.querySelector('.spinner-border').classList.add('d-none')
        if(objAjax.responseText === 'existe'){
            email.classList.add('is-invalid')
        }else{
            email.classList.add('is-valid')
        } 
    }
}

var grupo = document.querySelector('#grupo')
var objetoAjaxPost;
grupo.addEventListener("change",cargarSuperHeroes)

function cargarSuperHeroes(){
    objetoAjaxPost = new XMLHttpRequest()
    var idGrupo = grupo.value
    let url = 'http://localhost:3000'
    objetoAjaxPost.addEventListener('load',response)
    objetoAjaxPost.addEventListener('error',errorAjax)

    objetoAjaxPost.open('POST',url)
    objetoAjaxPost.send(idGrupo)
}

function response(){
    if(objetoAjaxPost.status !== 200){
        errorAjax()
    }else{
        document.querySelector("#listado").innerHTML = objetoAjaxPost.responseText
    }
}

function errorAjax(){
    console.log("Esto no funca")
}