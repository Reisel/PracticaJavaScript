/*
class miclase1{
    contador = 0
}

mic1 = new miclase1()
mic1.contador = 43
mic2 = new miclase1()
mic2.contador =43
mic3 = new miclase1()
mic3.contador = 43
*/

let miSingleton = (function(){
    let instancia;

    function init() {
        function metodoPrivado(){
            console.log('Soy un método privado')
        }
        let variablePrivada = "Yo soy una variable privada"

        let numeroAleatorio = Math.random()

        return {
            metodoPublico: function(){
                console.log('Hoy soy el metodo public de init')
            },

            propiedadPublica: 'Yo soy una prop publica',
            
            getNumeroAleatorio: function(){
                return numeroAleatorio
            }
        }
    }
    return { 
        getInstancia: function(){
            if(!instancia){
                instancia = init()
            }
            return instancia
        }
    }
})()

let singleA = miSingleton.getInstancia()
let singleB = miSingleton.getInstancia()