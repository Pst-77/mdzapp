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
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react'
import { DeleteSweepRounded } from '@mui/icons-material';

export default function CheckoutTable({productoSeleccionado, cantidadProducto, ProductosCarrito, deletePrd}) {
  const [expanded, setExpanded] = React.useState(false);
  const [cantidadSeleccionada, setcantidadSeleccionada] = React.useState(cantidadProducto)
             //13

//  const classes=useStyles();
  const { id, descripcion, precioventa, url_foto} = productoSeleccionado;
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
            <TableCell align="center" sx={{background:'#D5DBDB',color: '#002652',maxWidth: '100%', width: '15%', fontSize: '110%', fontWeight: 'bold' }}>Imagen</TableCell>
            <TableCell align="center" sx={{background:'#D5DBDB',color: '#002652', width: '30%', fontSize: '110%', fontWeight: 'bold'}} >Nombre</TableCell>
            <TableCell align="center" sx={{background:'#D5DBDB',color: '#002652', width: '10%', fontSize: '110%', fontWeight: 'bold' }}>Precio</TableCell>
            <TableCell align="center" sx={{background:'#D5DBDB',color: '#002652', width: '25%', fontSize: '110%', fontWeight: 'bold' }}>Cantidad</TableCell>
            <TableCell align="center" sx={{background:'#D5DBDB',color: '#002652', width: '10%', fontSize: '110%', fontWeight: 'bold' }}>Total</TableCell>
            <TableCell align="center" sx={{background:'#D5DBDB',color: '#002652', width: '10%', fontSize: '110%', fontWeight: 'bold' }}>Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" sx={{color: '#002652', maxWidth: '100%', width: '15%', margin: '0 auto', fontSize: '110%', fontWeight: 'bold'}}><img className='Carmediapg' src={url_foto}/>             </TableCell>
              <TableCell align="center" sx={{color: '#002652', width: '30%', fontSize: '110%', fontWeight: 'bold'}}>{descripcion}</TableCell>
              <TableCell align="center" sx={{color: '#002652', width: '10%', fontSize: '110%', fontWeight: 'bold'}}>{accounting.formatMoney (precioventa, "$")}</TableCell>
              <TableCell align="center" sx={{color: '#002652', width: '25%', fontSize: '110%', fontWeight: 'bold'}}><ItemCount   cantidadSeleccionada={cantidadSeleccionada} setcantidadSeleccionada={actualizarCantidadCarrito} /></TableCell>
              <TableCell align="center" sx={{color: '#002652', width: '10%', fontSize: '110%', fontWeight: 'bold'}}>{accounting.formatMoney (precioventa * cantidadProducto, "$")}</TableCell>
              <TableCell align="center" sx={{color: '#002652', width: '10%', fontSize: '110%', fontWeight: 'bold'}}><Button onClick={()=>deletePrd(id)}><DeleteIcon/></Button></TableCell>
            </TableRow>
      </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}