let carritoModulo = (function(){
    let carrito = []
    const IVA = 1.21
    let tbody = document.querySelector("#tbody")

    function calcularIVA(precio){
        var valorConIva = precio * IVA
        return valorConIva.toFixed(2)
    }

    function calcularIVASinFormato(precio){
        return precio * IVA
    }

    return {
        addItem: function(item){
            item.precioConIva = calcularIVA(item.precio)
            carrito.push(item)
            this.mostrarProductos()
        },
        getItemsTotales: function(){
            return carrito.length
        },
        getTotalCompra: function(){
            let items = this.getItemsTotales()
            let total = 0

            while(items--){
                total += calcularIVASinFormato(carrito[items].precio)
            }

            return total.toFixed(2)
        },
        mostrarProductos: function(){
            tbody.innerHTML = ""
            carrito.forEach(function(producto){
                let fila = document.createElement('tr')
                let tdProducto = document.createElement('td')
                let tdPrecio = document.createElement('td')
                let tdTotal = document.createElement('td')
                tdProducto.innerHTML = producto.item
                tdPrecio.innerHTML = `$ ${producto.precio}`
                tdTotal.innerHTML =  `$ ${producto.precioConIva}`
                fila.appendChild(tdProducto)
                fila.appendChild(tdPrecio)
                fila.appendChild(tdTotal)

                tbody.appendChild(fila)
            })
             
            let trTotal = document.createElement('tr')
            let tdVacio = document.createElement("td")
            tdVacio.innerHTML = ""
            let tdVacio2 = document.createElement("td")
            tdVacio2.innerHTML = ""
            let tdTotal = document.createElement("td")
            tdTotal.innerHTML = "$" + this.getTotalCompra()

            trTotal.appendChild(tdVacio)
            trTotal.appendChild(tdVacio2)
            trTotal.appendChild(tdTotal)
            tbody.appendChild(trTotal) 
        }

    }
})()


document.getElementById("btn_aceptar").addEventListener('click',function(){
    let producto = {
        item: document.querySelector("#producto").value,
        precio: document.querySelector("#precio").value
    }
    carritoModulo.addItem(producto)
})