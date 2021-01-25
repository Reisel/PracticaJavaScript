/*
Promise(funcion)
funcion => executor => resolve y reject

Objeto Promise
 - state : pending
        -> cambiar: fullfiled
                    rejected
- result: undefined

Una vez que el executor termina su ejecución, va a llamar a una de las dos funciones recibidas como parametro (resolve,reject)

resolve: 
    - state: fullfiled
    - result: value
reject:
    - state: rejected
    - result: error
*/

let promesa = new Promise(function(resolve,reject){
    let resultado = true
    //setTimeout(function(){resolve('Promesa cumplida!!!')},1000)
    if(resultado){
        setTimeout(function(){resolve('Promesa cumplida!!!')},1000)
    }else{
        setTimeout(function(){reject('Uy rompió mal!')},1000)
    }
})

promesa.then(
    function(resultado){ console.log(resultado)},
    function(error) {console.log(`Error por reject: ${error}`)}
)


console.clear()

let promesaDos = new Promise((resolve,reject) => {
    setTimeout(()=>{resolve(1)},1000)
}).then(resultado => {
    console.log(resultado)
    return resultado + 1
}).then(resultado => {
    console.log(resultado)
    return resultado + 1
}).then(resultado => {
    console.log(resultado)
}).catch(error => {
    console.log('Hubo un error')
})

let promesaTres = new Promise((resolve,reject) => {
    setTimeout(()=>{resolve(1)},1000)
})
promesaTres.then(resultado => {
    console.log(resultado)
    return resultado + 2
})

promesaTres.then(resultado => {
    console.log(resultado)
})

usuariosJSON = {}


fetch('https://jsonplaceholder.typicode.com/users')
    .then(resultado => {
        //JSON.parse
        //console.log(resultado.json())
        return resultado.json()
    }).then(usuarios => {
        //console.log(usuarios)
        //usuariosJSON = usuarios
        let ulHtml = document.querySelector('ul')
        let datos = ''
        usuarios.map(function(usuario){
            let nodeLI = document.createElement('li')
            nodeLI.innerHTML= `<li>${usuario.name}</li>`
            ulHtml.appendChild(nodeLI)
        })
    })


const url = 'https://jsonplaceholder.typicode.com/posts'
const data = {
    "userId": 1,
    "title": "Este es el título de un nuevo post",
    "body": "Este es el cuerpo de un nuevo post"
}
fetch(url,{
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(respuesta => console.log(respuesta))
.catch(error => console.log(`Hubo un error: ${error}`))