import './DetalleProducto.css'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import accounting from 'accounting'
import { tableCellClasses } from '@mui/material/TableCell';
import ItemCount from '../ContadorProductos/BtnContador';
import { addToBasket } from '../../tool/tool';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:'#002652',
    color: theme.palette.common.white,
    borderBottom: 'none',
    width: '100%',
  },

  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    borderBottom: 'none',
    width: '100%', 
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
  backgroundColor: '#f4f6f9',
  color: theme.palette.common.white,
  fontSize: 16,
  borderBottom: 'none',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
    borderBottom: 'none',
  },
}));

export default function DetalleProducto(props) {
  const [cantidadSeleccionada, setcantidadSeleccionada] = useState(0)  
  const [expanded, setExpanded] = React.useState(false);

  function llamadaAddtoBasket(){
    const detalleProducto2 = {
      cantidadSeleccionada,
      productoSeleccionado: props.oProducto,
    }
    addToBasket(detalleProducto2, props.countElemento, props.setcountElemento);
  }
  
  const { producto } = useParams(); 
  return ( <div>
    <Grid container spacing={3}>        
            <Grid item xs={12} lg={12}>
              <br></br>
              <br></br>
              <br></br>

            <Typography align='center' gutterBottom variant='h1' style={{ fontSize: '4vh', margin: 'auto', fontWeight:'Bold' }}>
              Información del producto 
            </Typography>
            </Grid>
            
            <Grid item xs={1} sm={1} md={1} lg={1}container spacing={2}>
            </Grid>
            
            <Grid item xs={12} sm={6} md={5} lg={4}container spacing={2}>
            <img className='.imgprd-fluid:hover' src={props.oProducto.url_foto} style={{ width: '77%', height: '77%' }}/>
            </Grid>
            
            <Grid item xs={12} sm={4} md={3} lg={6}>
                <Typography aling='center'  gutterBottom varian = 'h4'>
                <TableContainer component={Paper}>
      <Table sx={{ maxWidth: '103vh' }} aria-label="customized table">
        <TableHead >
          <TableRow >
            <StyledTableCell s style={{ fontSize: '3vh', minWidth: '25vh',  backgroundColor: 'orange', textAlign: 'center', verticalAlign: 'middle'  }}>Caracteristicas</StyledTableCell>
            <StyledTableCell style={{ fontSize: '3vh', minWidth: '75vh',  backgroundColor: 'orange', textAlign: 'center', verticalAlign: 'middle'  }}>Descripción</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
        <StyledTableRow>
        <StyledTableCell  scope="row" > Nombre</StyledTableCell>
              <StyledTableCell scope="row"> <h3>{props.oProducto.descripcion}</h3></StyledTableCell>
        </StyledTableRow>
            
        <StyledTableRow>
        <StyledTableCell scope="row"> Categoria</StyledTableCell>
        <StyledTableCell  scope="row">{props.oProducto.marca}</StyledTableCell>
        </StyledTableRow>

        <StyledTableRow>
        <StyledTableCell  scope="row"> Precio</StyledTableCell>
        <StyledTableCell  scope="row"> {accounting.formatNumber(props.oProducto.precioventa, "$")}</StyledTableCell>
        </StyledTableRow>

        <StyledTableRow>
        <StyledTableCell align="left">Descripción</StyledTableCell>
        <StyledTableCell align="left">{props.oProducto.producto}</StyledTableCell>
        </StyledTableRow>

        <StyledTableRow>
        <StyledTableCell scope="row" >Agregar al carrito </StyledTableCell>
              <StyledTableCell  scope="row"> 
                <div className='div-dt-prd-izp'>   
                <ItemCount cantidadSeleccionada={cantidadSeleccionada} setcantidadSeleccionada={setcantidadSeleccionada}/>
                </div>
                <div className='div-dt-prd-der'>
                   <Button onClick={llamadaAddtoBasket} variant="contained" color="primary">Añadir</Button>
                </div>
               </StyledTableCell>
        </StyledTableRow>
        </TableBody>
      </Table>      
    </TableContainer>
               </Typography>
            </Grid> 
            <Grid item xs={1} sm={1} md={1} lg={1}container spacing={2}>
            </Grid>

    </Grid>
</div>
  );
}

