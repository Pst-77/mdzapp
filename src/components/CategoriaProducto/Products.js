import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from '../homeProductos/Product'
import { _productoApitemp } from '../homeProductos/product-data';
import './CategoriaProducto.css'
import ListFiltros from '../Diviciones-filtros/filtros';
import { useParams } from 'react-router-dom';
import { addToBasket } from '../../tool/tool';
import AlertProduct from '../Alert/Alerts';


export default function GridProductos(props) {
  const { Categoria, Subcategoria } = useParams();
  function addToBasketBridge(detalleProducto) {
    addToBasket(detalleProducto, props.countElemento, props.setcountElemento);
    setShowAlert(true);
  }

  const productosFiltradosMN = _productoApitemp.filter(i => i.subcategoria === Subcategoria);
  const [showAlert, setShowAlert] = React.useState(false);
  return (
    <div className='container-cgt-prd'>
      <div className='ctg-filtro-prd'>
        <ListFiltros />
        <br></br>
      </div>
      <div className='ctg-grd-prd'>
        <div>
          <br></br>
          <br></br>
          <h1 className='tt-grd-prd'>PRODUCTOS</h1>
          <br></br>
          <br></br>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
              {
                productosFiltradosMN.map(product => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                    <Product numElementoHandler={addToBasketBridge} setoProducto={props.setoProducto} item={product} />
                  </Grid>
                ))}
            </Grid>
          </Box>
          {showAlert && <AlertProduct />}
        </div>
      </div>
    </div>

  );
}

