(function cuadrado(numero){
    console.info(`El cuadrado del número es ${numero * numero}`)
})(500)

//var cuadradoReferencia = cuadrado
//cuadrado(123)


let testModulo = (function(){
    var contador = 0

    return {
        incrementarContador : function(){
            return contador++
        },

        resetearContador : function(){
            console.log(`El valor del contador antes de resetear es ${contador}`)
            contador = 0
        }
    }
})()



let carritoModulo = (function(){
    let carrito=[]
    const IVA = 1.21

    function calcularIVA(precio){
        return precio * IVA
    }

    // A partir de aca se expone la parte publica del objeto
    return {
        agregarItem: function(item){
            carrito.push(item)
        },

        getItemsTotales: function(){
            return carrito.length
        },
        

        getTotal: function(){
            let q = this.getItemsTotales(), p=0
            while(q--){
                p+= calcularIVA(carrito[q].precio)
            }
            return p
        }
    }
})();

carritoModulo.agregarItem({
    item: 'pan',
    precio: 100
})
carritoModulo.agregarItem({
    item: 'detergente',
    precio: 50
})

carritoModulo.agregarItem({
    item: 'Coca Cola 2,25 lts',
    precio: 180
})

