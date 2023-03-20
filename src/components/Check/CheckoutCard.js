import * as React from 'react';
import accounting from 'accounting';
import ItemCount from '../ContadorProductos/BtnContador';
import './checkCardStilo.css';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';


export default function CheckoutTable({productoSeleccionado, cantidadProducto, ProductosCarrito, deletePrd}) {
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
       <TableRow  sx={{ '&:last-child td, &:last-child th': { border:0 } }}>
              <TableCell component="th" scope="row" sx={{color: '#002652', maxWidth: '100%', width: '15%', margin: '0 auto', fontSize: '110%', fontWeight: 'bold', border: '1px solid #D5DBDB !important'}}><img className='Carmediapg' src={url_foto}/>             </TableCell>
              <TableCell align="center" sx={{color: '#002652', width: '30%', fontSize: '110%', fontWeight: 'bold', border: '1px solid #D5DBDB !important'}}>{descripcion}</TableCell>
              <TableCell align="center" sx={{color: '#002652', width: '10%', fontSize: '110%', fontWeight: 'bold', border: '1px solid #D5DBDB !important'}}>{accounting.formatMoney (precioventa, "$")}</TableCell>
              <TableCell align="center" sx={{color: '#002652', width: '25%', fontSize: '110%', fontWeight: 'bold', border: '1px solid #D5DBDB !important'}}><ItemCount   cantidadSeleccionada={cantidadSeleccionada} setcantidadSeleccionada={actualizarCantidadCarrito} /></TableCell>
              <TableCell align="center" sx={{color: '#002652', width: '10%', fontSize: '110%', fontWeight: 'bold', border: '1px solid #D5DBDB !important'}}>{accounting.formatMoney (precioventa * cantidadProducto, "$")}</TableCell>
              <TableCell align="center" sx={{color: '#002652', width: '10%', fontSize: '110%', fontWeight: 'bold', border: '1px solid #D5DBDB !important'}}><Button onClick={()=>deletePrd(id)}><DeleteIcon style={{ color: '#e64a19' }}/></Button></TableCell>
            </TableRow>
    
  );
}