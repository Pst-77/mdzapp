import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {_products} from '../homeProductos/product-data';
//import Product from '../homeProductos/Product';
import CheckoutCard from './CheckoutCard';
import "./checkCardStilo.css";
import Total from '../Total/Total';
import { useStateValue } from '../../CtxApii/StateProvider';

function FormRow(props){
    //const [{basket}, dispatch]=useStateValue();
    return(
<React.Fragment>
    {props.lstProducto.map((item)=>(
        <Grid item xs={12} sm={8} md={6} lg={10} key={item.id + 'chprd'}>
            <CheckoutCard  pproduct={item.productoSeleccionado} cantidadProducto={item.cantidadSeleccionada}/>
        </Grid>
    ))}
</React.Fragment>
 );
}


export default function CheckoutPage(props) {

  return (
    <div>
        <Grid container spacing={3}>
                
                <Grid item xs={12}>
                <Typography aling ='center' gutterBottom varian = 'h4'>
                    <div className='ttpage'>
                    <h1>Carrito de Compras</h1>
                    </div>
                </Typography>
                </Grid>
                
                <Grid item xs={12} sm={6} md={5} lg={8}container spacing={2}>
                <FormRow lstProducto={props.countElemento}/>
                </Grid>
                
                <Grid item xs={12} sm={4} md={3}>
                    <Typography aling='center'  gutterBottom varian = 'h4'>
                    <Total lstProducto={props.countElemento}/>
                   </Typography>
                </Grid> 
    
        </Grid>
    </div>
  )
}
