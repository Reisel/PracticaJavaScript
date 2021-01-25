var MI_APLICACION = MI_APLICACION || {}
MI_APLICACION.alumno = {
    nombre: 'Ramiro',
    apellido: 'Perez'
}


MI_APLICACION.alumno = function(nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido;
} 

MI_APLICACION.miArray = []

MI_APLICACION.ingresarAlumno = function(nombre,apellido){
    var alumno = new this.alumno(nombre,apellido)
    this.miArray.push(alumno)
}
MI_APLICACION.ingresarAlumno("Maria","Perez")
MI_APLICACION.ingresarAlumno("Jose","Rodriguez")
MI_APLICACION.ingresarAlumno("Carla","Re")

MI_APLICACION.listadoAlumnos = function(){
    var ulNode = document.querySelector('ul')
    for(var i = 0; i< this.miArray.length; i++){
        var liNode =document.createElement('li')
        liNode.innerHTML = `El nombre del alumn@ es ${this.miArray[i].nombre} ${this.miArray[i].apellido}`
        ulNode.appendChild(liNode)
        console.log(`El nombre del alumn@ es ${this.miArray[i].nombre} ${this.miArray[i].apellido}`)
    }
}