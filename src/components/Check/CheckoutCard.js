import * as React from 'react';
import accounting from 'accounting';
import ItemCount from '../ContadorProductos/BtnContador';
import './checkCardStilo.css';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import { useState, useEffect } from 'react'

export default function CheckoutTable({productoSeleccionado, cantidadProducto, ProductosCarrito}) {
  
  const [expanded, setExpanded] = React.useState(false);
  const [cantidadSeleccionada, setcantidadSeleccionada] = React.useState(cantidadProducto)
             //13

//  const classes=useStyles();
  const { name, price, image} = productoSeleccionado;
                                        //entra 14
  function actualizarCantidadCarrito(cantidad){
    

    const DetalleProductoCarrito={
      productoSeleccionado, //todo los datos armex
            cantidadSeleccionada:cantidad, // se asigna un nuevo valor propiedad de este objeto que es 14 

    }
       //esta cantidad llega con 14 desde el parametro de la funcion
    setcantidadSeleccionada(cantidad)
    ProductosCarrito(DetalleProductoCarrito) //se envia a guarddar el objeto donde su propiedad cantidadsleccionada es 14
   
    
  }


  return (  
    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right" sx={{background:'#D5DBDB',color: '#002652' }}>Imagen</TableCell>
            <TableCell align="right" sx={{background:'#D5DBDB',color: '#002652' }} >Nombre</TableCell>
            <TableCell align="right" sx={{background:'#D5DBDB',color: '#002652' }}>Precio</TableCell>
            <TableCell align="right" sx={{background:'#D5DBDB',color: '#002652' }}>Cantidad</TableCell>
            <TableCell align="right" sx={{background:'#D5DBDB',color: '#002652' }}>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row"><img className='Carmediapg' src={image}/>             </TableCell>
              <TableCell align="center">{name}</TableCell>
              <TableCell align="center">{accounting.formatMoney (price, "$")}</TableCell>
              <TableCell align="center"><ItemCount   cantidadSeleccionada={cantidadSeleccionada} setcantidadSeleccionada={actualizarCantidadCarrito} /></TableCell>
              <TableCell align="center">{accounting.formatMoney (price * cantidadProducto, "$")}</TableCell>
            </TableRow>
      </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}