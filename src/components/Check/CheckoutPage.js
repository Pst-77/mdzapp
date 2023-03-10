import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CheckoutTable from './CheckoutCard';
import "./checkCardStilo.css";
import Total from '../Total/Total';
import { deleteBasket } from '../../tool/tool';





function FormRow(props)
{
    function actualizaProductosCarritos(DetalleProducto){
        const validaProductoCarrito=[...props.lstProducto]
        let prdEncontrado=validaProductoCarrito.find(indexprd=>indexprd.productoSeleccionado===DetalleProducto.productoSeleccionado)
        prdEncontrado.cantidadSeleccionada=DetalleProducto.cantidadSeleccionada
        props.setcountElemento(validaProductoCarrito)
  
    }

function deleteBasketBrige(deletePrd){
deleteBasket(deletePrd, props.lstProducto, props.setcountElemento)
}




    return(

            <React.Fragment>
                {props.lstProducto.map((i)=>{

                    return(
                        !!i?
                        <Grid item xs={12} sm={8} md={6} lg={10} key={i.productoSeleccionado.id + 'chprd'}>
                        <CheckoutTable ProductosCarrito={actualizaProductosCarritos} productoSeleccionado={i.productoSeleccionado} cantidadProducto={i.cantidadSeleccionada} deletePrd={deleteBasketBrige}/>
                        </Grid> : null )

                    }           
                    )}
            </React.Fragment>
        );
}

export default function CheckoutPage(props) {
    const [sumacantidad, setsumacantidad]= useState(0)
    const [subtotal, setsubtotal] =useState(0)


useEffect(() => {
    
    let newSubtotal = 0;
    let newSumacantidad = 0;
    
    props.countElemento.forEach(i => {
        if (!!i){
        newSubtotal += i.cantidadSeleccionada * i.productoSeleccionado.precioventa;
        newSumacantidad += i.cantidadSeleccionada;
    }
    });

    setsubtotal(newSubtotal);
    setsumacantidad(newSumacantidad);
}, [props.countElemento])


return (
    <div>
        <Grid container spacing={3}>
                
                <Grid item xs={12}>
                <Typography align  ='center' gutterBottom variant = 'h4'>
                  <br></br>
                  Carrito de Compras
                  
                </Typography>
                </Grid>
                
                <Grid item xs={12} sm={6} md={5} lg={8}container spacing={2}>
                
                <FormRow   lstProducto={props.countElemento} setcountElemento={props.setcountElemento}/>
                </Grid>
                
                <Grid item xs={12} sm={4} md={3}>
                    <Typography aling='center'  gutterBottom variant = 'h4'>
                    <Total  cantidad={sumacantidad} subtotal={subtotal} />
                   </Typography>
                </Grid> 
    
        </Grid>
    </div>
  )
}




