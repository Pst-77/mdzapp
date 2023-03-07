

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
    
  }

export  {addToBasket}
