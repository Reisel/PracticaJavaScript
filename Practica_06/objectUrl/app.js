// createObjectURL-> imagen => DOMString -> imagen string

let inputFile = document.querySelector('input[type=file]')
let vista_previa = document.querySelector('#vistaPrevia')

inputFile.addEventListener('change',(evento)=> {
    vista_previa.onload = function(){
        const dimensiones = vista_previa.naturalWidth + ' x ' + vista_previa.naturalHeight
        document.querySelector("#dimensiones").innerHTML = dimensiones

        window.URL.revokeObjectURL(vista_previa.src)
    }
    


    const url = window.URL.createObjectURL(evento.target.files[0])
    vista_previa.setAttribute("src",url)
})


