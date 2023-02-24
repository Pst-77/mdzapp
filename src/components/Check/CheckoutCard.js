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




export default function CheckoutTable({pproduct:{id, name, productType, image, price, rating}, cantidadProducto}) {
  const [expanded, setExpanded] = React.useState(false);
//  const classes=useStyles();
  //const { name, price, rating, image, description } = pproduct;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addProductos=()=>{

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
              <TableCell align="right">{name}</TableCell>
              <TableCell align="right">{accounting.formatMoney (price, "$")}</TableCell>
              <TableCell align="center">{cantidadProducto}<br></br><ItemCount/></TableCell>
              <TableCell align="right">{accounting.formatMoney (price * cantidadProducto, "$")}</TableCell>
            </TableRow>
      </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}