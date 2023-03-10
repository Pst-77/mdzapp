

function addToBasket(detalleProducto, countElemento, setcountElemento){
    const validaProductoLista=[...countElemento]
    let prdEncontrado=validaProductoLista.find(indexprd=>indexprd.productoSeleccionado===detalleProducto.productoSeleccionado)
    if (!!prdEncontrado){
    prdEncontrado.cantidadSeleccionada+=detalleProducto.cantidadSeleccionada
    
//    validaProductoLista[prdEncontrado]=prdEncontrado
    }
    else{
      validaProductoLista.push(detalleProducto)
    }
    setcountElemento(validaProductoLista)
    alert('Producto Agregado')
  }


function  deleteBasket( id, countElemento, setcountElemento){
const validaProductoLista=[...countElemento]
let prdEncontrado = validaProductoLista.findIndex(indexprd => !!indexprd && indexprd.productoSeleccionado.id === id);


delete validaProductoLista[prdEncontrado]
setcountElemento(validaProductoLista.filter(i=>!!i))
alert('Producto Eliminado del carrito')

}

export  {addToBasket, deleteBasket}