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





const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



export default function CheckoutCard1({pproduct:{id, descripcion, marca, url_foto, precioventa}, cantidadProducto}) {
  const [expanded, setExpanded] = React.useState(false);
//  const classes=useStyles();
  //const { name, price, rating, image, description } = pproduct;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addProductos=()=>{

  }

  return (
    <Card sx={{ maxWidth: 1000 }}>
       <div>
        <div className='Carmediapg'>
             <CardMedia  
                component="img"
                height="50"
                image={url_foto}
              >
             </CardMedia>
        </div>
      </div>

 <div className='container-nm-precio'>
   


 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 'auto'}} size="small" aria-label="a dense table">
       
          <TableRow >
            <TableCell align="left" sx={{background:'#D5DBDB',color: '#002652' }}>&#160;&#160;&#160;Nombre</TableCell>
            <TableCell align="right"sx={{background:'#D5DBDB',color: '#002652' }}>&#160;&#160;&#160;&#160;Precio</TableCell>
            <TableCell align="center"sx={{background:'#D5DBDB',color: '#002652' }}>&#160;&#160;Cantidad</TableCell>
            <TableCell align="left"sx={{background:'#D5DBDB',color: '#002652' }}>Total</TableCell>
          </TableRow>
     
      </Table>
    </TableContainer>


      <CardHeader 
        action={
                <Typography className= 'nn' variant='h6'>
                <div className='nm-producto'>
                {descripcion}
                </div>
                <div className='prc-producto'>
            
                {accounting.formatMoney (precioventa, "$")}
                </div>
                <div className='count-producto'>
                {cantidadProducto}
                </div>
                <div className='tt-producto'>
                {accounting.formatMoney (precioventa * cantidadProducto, "$")}
                </div>
                <div className='ic-delete'>
                <DeleteIcon/>
                </div>
                </Typography>                      
        }       
      />
      </div>
      
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      
      <div className='btn-cnt-prd'>
        <ItemCount/>
         </div>
      
      </Collapse>
    </Card>
  );
}