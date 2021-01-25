let form = document.forms.namedItem("formulario")

form.addEventListener('submit',(evento) => {
    evento.preventDefault()
    let campos = new FormData()
    campos.append("nombre",form.nombre.value)
    campos.append("edad",form.edad.value)
    campos.append("archivo",form.archivo.files[0])

    for(var par of campos.entries()){
        console.log(par[0] + ':' + par[1])
    } 
})