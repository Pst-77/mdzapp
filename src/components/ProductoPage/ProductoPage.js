import './DetalleProducto.css'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

//import CheckoutCard from './CheckoutCard';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import accounting from 'accounting'
import { tableCellClasses } from '@mui/material/TableCell';
import ItemCount from '../ContadorProductos/BtnContador';

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


export default function DetalleProducto() {

  return ( <div>
    <Grid container spacing={3}>
            
            <Grid item xs={12} lg={5}>
            <Typography aling ='center' gutterBottom varian = 'h4'>
                <div className='ttpage'>
                <h1>Carrito de Compras</h1>
                </div>
            </Typography>
            </Grid>
            
            <Grid item xs={12} sm={6} md={5} lg={8}container spacing={2}>
            <img src="https://www.construrama.com/medias/?context=bWFzdGVyfGltYWdlc3wxOTA1NnxpbWFnZS9qcGVnfGltYWdlcy9oYzEvaGM0LzkxNzAyNjY2NTI3MDIuanBnfGQzNjU0N2JiYTZiMjVhYmMyNTE0NTNmZmIyOWQyODRmZTJmZTI0OWYzMTNiM2YyYTk2NDA0ZjZlNWUwZjkwZDQ"/>
            </Grid>
            
            <Grid item xs={12} sm={4} md={3} lg={3.5}>
                <Typography aling='center'  gutterBottom varian = 'h4'>
                <TableContainer component={Paper}>
      <Table sx={{ maxWidth: '60vh' }} aria-label="customized table">
        <TableHead >
          <TableRow>
            <StyledTableCell><h2>Caracteristicas de Producto</h2></StyledTableCell>
           
          </TableRow>
          
        </TableHead>
        <TableBody>

        <StyledTableRow>
              <StyledTableCell component="th" scope="row"> <h3>Cemento: Blanco </h3>
              </StyledTableCell>

        </StyledTableRow>
            
        <StyledTableRow>
              <StyledTableCell component="th" scope="row"> <h3>Marca: CEMEX  </h3>
              </StyledTableCell>

        </StyledTableRow>

        <StyledTableRow>
              <StyledTableCell component="th" scope="row"> <h3>Unidad: Saco  </h3>
              </StyledTableCell>
              
        </StyledTableRow>

        <StyledTableRow>
              <StyledTableCell component="th" scope="row"> <h3>Precio: {accounting.formatNumber(50, "$")}</h3> 
              </StyledTableCell>

        </StyledTableRow>

        <StyledTableRow>

              <StyledTableCell align="left"><h3>Descripcion</h3></StyledTableCell>
        </StyledTableRow>

        <StyledTableRow>
              <StyledTableCell component="th" scope="row"><h3>Cantidad:</h3> <ItemCount/> 
              </StyledTableCell>

        </StyledTableRow>
        </TableBody>
       
      </Table>
      
    </TableContainer>


               </Typography>
            </Grid> 

    </Grid>
</div>
  );
}

