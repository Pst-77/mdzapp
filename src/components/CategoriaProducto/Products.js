import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Product from './Product';
import {_products} from '../homeProductos/product-data';
import GProducto from './Product';
import { Typography } from '@mui/material';
import './CategoriaProducto.css'
import ListFiltros from '../Diviciones-filtros/filtros';
/*
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
*/
export default function GridProductos() {
  return (
   <div className='container-cgt-prd'>
        <div className='ctg-filtro-prd'>
        <ListFiltros/>
        <br></br>
        </div>

        
        <div className='ctg-grd-prd'>
          <div>
          <br></br>
          <br></br>
            <h1 className='tt-grd-prd'>PRODUCTOS</h1>
        <br></br>
      <br></br>
         <ProductoGrd/>
        </div>
        </div>
   </div>
  
  );
}



 function ProductoGrd() {
  return (
   
    <Box sx={{ flexGrow: 1 }}>

      <Grid container spacing={1}>
     
        {
     _products.map(product =>(
      <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
        <Product  pproduct={product}/>
        </Grid>
     ))}
    
      </Grid>
    </Box>
  
  );
}