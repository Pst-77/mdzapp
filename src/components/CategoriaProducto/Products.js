import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './Product';
import {_productoApitemp} from '../homeProductos/product-data';
import './CategoriaProducto.css'
import ListFiltros from '../Diviciones-filtros/filtros';
import { useParams } from 'react-router-dom';



export default function GridProductos(props) {
  const { Categoria, Subcategoria } = useParams();
  const productosFiltradosMN = _productoApitemp.filter( i => i.subcategoria === Subcategoria);
  
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
         <ProductoGrd productosxMenu={productosFiltradosMN} />
        </div>
        </div>
   </div>
  
  );
}

 function ProductoGrd(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        {
     props.productosxMenu.map(product =>(
      <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
        <Product  pproduct={product}/>
        </Grid>
     ))}
      </Grid>
    </Box>
  );
}