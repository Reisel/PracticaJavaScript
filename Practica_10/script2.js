var MI_APLICACION = MI_APLICACION || {}
MI_APLICACION.ingresarAlumno("Marcos","Diaz")
MI_APLICACION.ingresarAlumno("Ana","Gomez")

var MI_APLICACION2 = {
    nombre: 'Otra aplicación',
    alumno: {
        alumno: function(nombre,apellido){
            this.nombre = nombre
            this.apellido = apellido
        },
        saludar: function(){
            let nombre = "Javier"
            return `Hola yo soy ${MI_APLICACION2.nombre}`
        }
    },
    descripcion: 'Otro namespace',
    nombrarAlumno: function(){
        console.log(this.alumno.nombre + ' ' + this.alumno.apellido)
    },
    toString: function(){
        return MI_APLICACION2.nombre + " " + this.descripcion
    }
}