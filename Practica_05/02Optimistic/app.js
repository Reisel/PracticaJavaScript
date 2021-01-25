function ajax(url,metodo,callback,error){
    let xhr = new XMLHttpRequest()
    xhr.open(metodo,url)
    xhr.addEventListener('load',function(){
        if(xhr.status === 200){
            callback(xhr.response)
        }else{
            error()
        }
    })

    xhr.addEventListener('error',error)
    xhr.send()
}

document.querySelector("#boton_pe").addEventListener('click',function(){
    ajax("https://jsonplaceholder.typicode.com/users",'get',actualizarBotonPe,errorPe)
})

document.querySelector("#boton_op").addEventListener('click',function(){
    actualizarBotonOp()
    setTimeout(() => {
        ajax("https://jsonplaceholder.typicode.com/users1",'get',actualizarBotonOp,errorOp)
    },2000)
})

function actualizarBotonOp(){
    let boton = document.querySelector("#boton_op")
    boton.classList.remove('btn-primary')
    boton.classList.add('btn-danger')
    boton.setAttribute('disabled',true)
    document.querySelector('.bd-op').innerHTML = parseInt(document.querySelector('.bd-op').innerHTML) + 1 
}

function errorOp(){
    let boton = document.querySelector("#boton_op")
    boton.classList.add('btn-primary')
    boton.classList.remove('btn-danger')
    boton.removeAttribute('disabled')
    document.querySelector('.bd-op').innerHTML = parseInt(document.querySelector('.bd-op').innerHTML) - 1 
}

function actualizarBotonPe(){
    let boton = document.querySelector("#boton_pe")
    boton.classList.remove('btn-primary')
    boton.classList.add('btn-danger')
    boton.setAttribute('disabled',true)
    document.querySelector('.bd-pe').innerHTML = parseInt(document.querySelector('.bd-pe').innerHTML) + 1 
}

function errorPe(){
    console.log('error')
}