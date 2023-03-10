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
import './Total.css'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';



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

  const uuid = uuidv4(); 


const Total = (props)=>{
    return(
         <div className='tt-pg-prd'>
        <span style={{fontSize: '40%'}}>Folio de compra: {uuid}</span>
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
              <StyledTableCell  scope="row"> <h3>Total de Productos  </h3>
              </StyledTableCell>
              <StyledTableCell align="right">{props.cantidad}</StyledTableCell>
        </StyledTableRow>
            
        <StyledTableRow>
              <StyledTableCell  scope="row"> <h3>Subtotal  </h3>
              </StyledTableCell>
              <StyledTableCell align="right"><h3>{accounting.formatNumber(props.subtotal, "$")}</h3></StyledTableCell>
        </StyledTableRow>

        <StyledTableRow>
              <StyledTableCell  scope="row"> <h3>I.V.A</h3>
              </StyledTableCell>
              <StyledTableCell align="right"><h3>{accounting.formatNumber(props.subtotal*0.16, "$")}</h3></StyledTableCell>
        </StyledTableRow>

        <StyledTableRow>
              <StyledTableCell  scope="row"><h3> Total </h3>
              </StyledTableCell>
              <StyledTableCell align="right"><h3>{accounting.formatNumber(props.subtotal * 1.16, "$")}</h3></StyledTableCell>
        </StyledTableRow>
        </TableBody>
       
      </Table>
      
    </TableContainer>
    <br></br>
    <div className='opc-clnt-cmp'>
    <Button variant='contained' color='primary' sx={{width: '25%', height: '50%' }} ><h3>Cotizar</h3></Button>&nbsp;&nbsp;&nbsp;
    <Button component={Link} to='/Envios' variant='contained' color='primary' sx={{width: '70%', height: '50%' }}  ><h3>Pagar</h3></Button>
    </div>
    
    </div>
   
      
    )
}
export default Total;