import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import accounting from 'accounting';
import Button from '@mui/material/Button';
import ItemCount from '../ContadorProductos/BtnContador';
//import { style } from '@mui/system';
import './checkCardStilo.css';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
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


export default function DenseTable({pproduct:{id, name, productType, image, price, rating}, cantidadProducto}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Imagen</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}