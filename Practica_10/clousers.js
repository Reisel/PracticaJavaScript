/* Toda función que utiliza variables del exterior es considerada una clousure  */

let numero = 23
var agregar = function(){
    var interna = 7
    return numero + interna
}

var otroAgregar = function(parametro){
    var agregar = function(interna){
        return parametro + interna
    }

    return agregar
}

var sumalocaFn = new otroAgregar(10)
sumalocaFn(90)

/* Son funciones que preservan datos */

function ProductoId(){
    var prodId = 999

    return {
        getId: function(){
            return prodId
        },
        /*setId: function(nuevoId){
            if(nuevoId < 0){
                prodId = 1    
            }else{
                prodId = nuevoId
            }
        }*/
    }
}

var prodClou = ProductoId()

/*

private int numero;
public void setNumero(int numero){
    this.numero = numero;
}
public int getNumero(){
    return this.numero;
}

*/


