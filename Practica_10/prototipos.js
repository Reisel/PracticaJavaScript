let vehiculoProtipo = {
    init: function(modeloAuto){
        this.modelo = modeloAuto
    },

    getModelo: function(){
        return `El modelo del vehículo es ${this.modelo}`
    },

    acelerar: function(){
        return 'El coche está acelerando'
    }
}


function vehiculo(modeloAuto){
    function F(){}
    F.prototype = vehiculoProtipo
    let f = new F()

    f.init(modeloAuto)
    return f;
}