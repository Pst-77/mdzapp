import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {_products} from '../homeProductos/product-data';
//import Product from '../homeProductos/Product';
import CheckoutTable from './CheckoutCard';
import "./checkCardStilo.css";
import Total from '../Total/Total';
import { useStateValue } from '../../CtxApii/StateProvider';




function FormRow(props){
    //const [{basket}, dispatch]=useStateValue();
    return(
<React.Fragment>
    {props.lstProducto.map((i)=>{
      

        return(<Grid item xs={12} sm={8} md={6} lg={10} key={i.productoSeleccionado.id + 'chprd'}>
            <CheckoutTable  pproduct={i.productoSeleccionado} cantidadProducto={i.cantidadSeleccionada}/>
        </Grid>)
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
        newSubtotal += i.cantidadSeleccionada * i.productoSeleccionado.price;
        newSumacantidad += i.cantidadSeleccionada;
    });

    setsubtotal(newSubtotal);
    setsumacantidad(newSumacantidad);
}, [])


return (
    <div>
        <Grid container spacing={3}>
                
                <Grid item xs={12}>
                <Typography aling ='center' gutterBottom variant = 'h4'>
                  
                  Carrito de Compras
                  
                </Typography>
                </Grid>
                
                <Grid item xs={12} sm={6} md={5} lg={8}container spacing={2}>
                <FormRow   lstProducto={props.countElemento} />
                </Grid>
                
                <Grid item xs={12} sm={4} md={3}>
                    <Typography aling='center'  gutterBottom variant = 'h4'>
                    <Total cantidad={sumacantidad} subtotal={subtotal} />
                   </Typography>
                </Grid> 
    
        </Grid>
    </div>
  )
}




