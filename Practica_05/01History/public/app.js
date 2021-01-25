var tabs = document.querySelectorAll("a[data-tab-for]")
var contenidos = document.querySelectorAll(".content>p")

tabs.forEach(tab => tab.addEventListener('click',tabClickeado))
window.onpopstate = checkearEstado

history.replaceState({
    tabForId: tabs[0].dataset.tabFor
},null,"tab-"+ tabs[0].dataset.tabFor)

function tabClickeado(evento){
    evento.preventDefault()
    var contenidoId = evento.target.dataset.tabFor
    
    mostrarContenido(contenidoId)
    history.pushState({
        tabForId: contenidoId
    },null,"tab-" + contenidoId)
}

function mostrarContenido(id){
    contenidos.forEach(contenido => {
        if(contenido.getAttribute("id") === id){
            contenido.classList.remove('d-none')
        }else{
            contenido.classList.add('d-none')
        }
    })
    tabs.forEach(tab => {
        if(tab.dataset.tabFor === id){
            tab.classList.add("active")
        }else{
            tab.classList.remove("active")
        }
    })
}

function checkearEstado(evento){
    console.log(evento)
    if(evento.state){
        mostrarContenido(evento.state.tabForId)
    }
}