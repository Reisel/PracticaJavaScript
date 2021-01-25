/*
Catalogo de Películas => Entidades => Pelicula
Recursos => Pelicula

Pelicula -> Read => GET
         -> Create => Post  
         -> Update => Put
         -> Delete => Delete


url_base/{recurso}/{parametros}
url Params: {url_base}/{recurso}/{id_recurso}
queryString: {url_base}/{recurso}?{parametro1}={dato}&{parametro2}={dato2}

GET codigosimple.com.ar/pelicula
POST codigosimple.com.ar/pelicula
PUT codigosimple.com.ar/pelicula/12
DELETE codigosimple.com.ar/pelicula/12

HTTP => status 200/201 => created /404/500


frontend y backend => aplicaciones monóliticas(mvc)

Angular                     backend => microservicios
(sistema)                   (sistema)
*/

let xhr = new XMLHttpRequest()
xhr.open('get','https://jsonplaceholder.typicode.com/users')
xhr.addEventListener('load',() => {
    //console.log(xhr.response)
     let usuarios = JSON.parse(xhr.response)
     //let usuariosString = JSON.stringify(usuarios)
     let xhr_posts = new XMLHttpRequest()
     xhr_posts.open('get',`https://jsonplaceholder.typicode.com/posts?userId=${usuarios[0].id}`)
    xhr_posts.addEventListener('load',() => {
        let posteos = JSON.parse(xhr_posts.response)
        //console.log(posteos)
        let xhr_comentarios = new XMLHttpRequest()
        xhr_comentarios.open('get',`https://jsonplaceholder.typicode.com/comments?postId=${posteos[0].id}`)
        xhr_comentarios.addEventListener('load',() => {
            let comentarios = JSON.parse(xhr_comentarios.response)
            console.log(comentarios)
        })
        xhr_comentarios.send()
    })
    xhr_posts.send()
})

xhr.send()
/*
    readyState => onreadystatechange
*/
