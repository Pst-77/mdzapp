import accounting from 'accounting'
import React from 'react'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//import {withStyles } from '@mui/material';
import './Total.css'



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

function sumacantidadProductos(){

}

const Total = (props)=>{
    return(
         <div className='tt-pg-prd'>
            <h5>Folio de compra: 15022311250145687</h5>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: '40vh' }} aria-label="customized table">
        <TableHead >
          <TableRow>
            <StyledTableCell><h2>Detalle de pago</h2></StyledTableCell>
            <StyledTableCell><h2>Cantidad</h2></StyledTableCell>
          </TableRow>
          
        </TableHead>
        <TableBody>

        <StyledTableRow>
              <StyledTableCell component="th" scope="row"> <h3>Total de Productos  </h3>
              </StyledTableCell>
              <StyledTableCell align="right"><h3>{accounting.formatNumber(8, "$")}</h3></StyledTableCell>
        </StyledTableRow>
            
        <StyledTableRow>
              <StyledTableCell component="th" scope="row"> <h3>Subtotal  </h3>
              </StyledTableCell>
              <StyledTableCell align="right"><h3>{accounting.formatNumber(50, "$")}</h3></StyledTableCell>
        </StyledTableRow>

        <StyledTableRow>
              <StyledTableCell component="th" scope="row"> <h3>Descuento  </h3>
              </StyledTableCell>
              <StyledTableCell align="right"><h3>{accounting.formatNumber(50, "$")}</h3></StyledTableCell>
        </StyledTableRow>

        <StyledTableRow>
              <StyledTableCell component="th" scope="row"> <h3><h3>{accounting.formatNumber(50, "$")}</h3> </h3>
              </StyledTableCell>
              <StyledTableCell align="right"><h3>{accounting.formatNumber(50, "$")}</h3></StyledTableCell>
        </StyledTableRow>

        <StyledTableRow>
              <StyledTableCell component="th" scope="row"><h3> Total </h3>
              </StyledTableCell>
              <StyledTableCell align="right"><h3>{accounting.formatNumber(50000, "$")}</h3></StyledTableCell>
        </StyledTableRow>
        </TableBody>
       
      </Table>
      
    </TableContainer>
    <br></br>
    <div className='opc-clnt-cmp'>
    <Button variant='contained' color='primary' sx={{width: '25%', height: '50%' }} ><h3>Cotizar</h3></Button>&nbsp;&nbsp;&nbsp;
    <Button variant='contained' color='primary' sx={{width: '70%', height: '50%' }}  ><h3>Pagar</h3></Button>
    </div>
    
    </div>
   
      
    )
}
export default Total;