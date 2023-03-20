import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CheckoutTable from './CheckoutCard';
import "./checkCardStilo.css";
import Total from '../Total/Total';
import { deleteBasket } from '../../tool/tool';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import logoMadeza from '../../assets/Logotest.jpg'


function FormRow(props) {
    function actualizaProductosCarritos(DetalleProducto) {
        const validaProductoCarrito = [...props.lstProducto]
        let prdEncontrado = validaProductoCarrito.find(indexprd => indexprd.productoSeleccionado === DetalleProducto.productoSeleccionado)
        prdEncontrado.cantidadSeleccionada = DetalleProducto.cantidadSeleccionada
        props.setcountElemento(validaProductoCarrito)
    }

    function deleteBasketBrige(deletePrd) {
        deleteBasket(deletePrd, props.lstProducto, props.setcountElemento)
    }

    return (
        <React.Fragment>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" sx={{ background: '#0AC269', color: 'white', maxWidth: '100%', width: '15%', fontSize: '110%', fontWeight: 'bold'}}>Imagen</TableCell>
                            <TableCell align="center" sx={{ background: '#0AC269', color: 'white', width: '30%', fontSize: '110%', fontWeight: 'bold' }} >Nombre</TableCell>
                            <TableCell align="center" sx={{ background: '#0AC269', color: 'white', width: '10%', fontSize: '110%', fontWeight: 'bold'}}>Precio</TableCell>
                            <TableCell align="center" sx={{ background: '#0AC269', color: 'white', width: '25%', fontSize: '110%', fontWeight: 'bold' }}>Cantidad</TableCell>
                            <TableCell align="center" sx={{ background: '#0AC269', color: 'white', width: '10%', fontSize: '110%', fontWeight: 'bold' }}>Total</TableCell>
                            <TableCell align="center" sx={{ background: '#0AC269', color: 'white', width: '10%', fontSize: '110%', fontWeight: 'bold' }}>Eliminar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.lstProducto.map((i) => {
                            return (
                                !!i ?  
                                        <CheckoutTable ProductosCarrito={actualizaProductosCarritos} productoSeleccionado={i.productoSeleccionado} cantidadProducto={i.cantidadSeleccionada} deletePrd={deleteBasketBrige} />
                                    : null)
                        }
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    );
}

export default function CheckoutPage(props) {
    const [sumacantidad, setsumacantidad] = useState(0)
    const [subtotal, setsubtotal] = useState(0)

    useEffect(() => {
        let newSubtotal = 0;
        let newSumacantidad = 0;
        props.countElemento.forEach(i => {
            if (!!i) {
                newSubtotal += i.cantidadSeleccionada * i.productoSeleccionado.precioventa;
                newSumacantidad += i.cantidadSeleccionada;
            }
        });
        setsubtotal(newSubtotal);
        setsumacantidad(newSumacantidad);
    }, [props.countElemento])

    const columns =
    [
        { title: "Codigo", field: "producto", },
        { title: "Producto", field: "nombre", },
        { title: "Precio Unitario", field: "precio", type: "currency" },
        { title: "Cantidad", field: 'cantidad', type: "numeric" },
        { title: "Total x Producto", field: 'total', type: "currency" }
    ]

    const validaBoton = () => {
        return subtotal !== 0;
      }
    
      const downloadPdf = () => {
        const doc = new jsPDF() 
        const arrayprint = props.countElemento.map(prdcarrito=>({
            producto:prdcarrito.productoSeleccionado.producto,
            nombre:prdcarrito.productoSeleccionado.descripcion,
            precio:`$${prdcarrito.productoSeleccionado.precioventa}`,
            cantidad:prdcarrito.cantidadSeleccionada,
            total:`$${prdcarrito.productoSeleccionado.precioventa*prdcarrito.cantidadSeleccionada}`
          }))
          arrayprint.push({
            cantidad:'Subtotal',
            total:`$${(subtotal).toLocaleString('es-MX')}`
            }
         )
         arrayprint.push({
            cantidad:'IVA',
            total: `$${(subtotal *.16).toLocaleString('es-MX')}`
                
         })
             
         arrayprint.push({
                
            cantidad:'Total',
            total: `$${(subtotal * 1.16).toLocaleString('es-MX')}`
            
         })
       
        var fecha= new Date()  
      
       
        doc.setFontSize(20)
        doc.text("MADEZA", 15,25)
        doc.setFontSize(15)
        doc.text("COTIZACIÓN ", 80, 37, {charSpace:3})
        doc.setFontSize(8)
        doc.text("Nota: Estimado cliente, le informamos que los precios de esta cotización pueden cambiar sin previo aviso.", 20,49)
        doc.setFontSize(10)
        doc.text("Fecha:" + fecha.toLocaleDateString(), 195,49,{align:'right'})
        doc.text("Dirección: Calle 6 Ote 235, Chichí Suárez, 97306 Mérida, Yuc.", 15,276)
        doc.text("Pagina: www.Madeza.com", 15,264)  
        doc.text("Telefono: 999-999-9999", 15,260)
        doc.text("Mail: atenciónalcliente@madeza.com", 15,268)
        doc.text("Horario: Lunes a sabado de 9am-7pm", 15,272)

        doc.autoTable({
          theme: "grid",    
          columns: columns.map(col => ({ ...col, dataKey: col.field })),
          body: arrayprint,
          startY: 50,
          startX:20
        })
          doc.save('table.pdf')
          console.log("print", arrayprint)
      }

    return (
        <div>
            <Grid container spacing={3}>
                
                <Grid item xs={8}>
                    
                    <Typography align='center' gutterBottom variant='h3'>
                        <br></br>
                        
                        Carrito de Compras
                    </Typography>
                    
                </Grid >
                <Grid item xs={4}>
                    <div></div>
                </Grid>

                <Grid item xs={12} sm={6} md={5} lg={8} container spacing={2}>
                
                    <FormRow lstProducto={props.countElemento} setcountElemento={props.setcountElemento} />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Typography aling='center' gutterBottom variant='h4'>
                        <Total arrayprint={downloadPdf} cantidad={sumacantidad} subtotal={subtotal} validador={validaBoton}/>
                    </Typography>
                </Grid>

            </Grid>
        </div>
    )
}




