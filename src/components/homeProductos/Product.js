import React, { useState } from "react";
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
import accounting from 'accounting';
import ItemCount from '../ContadorProductos/BtnContador.js';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './producthome.css'

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

export default function Product(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [cantidadSeleccionada, setcantidadSeleccionada] = React.useState(0)  
  const detalleProducto = {
    cantidadSeleccionada,
    productoSeleccionado: props.item,
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  
  };

  const handleMouseOver = () => {
    setExpanded(true);

  }

  const handleMouseOut = () => {
    setExpanded(false);
 
   
  }
  const handlerDetalleProducto=()=>{
    props.setoProducto(props.item)
  }

  return (
    <Card sx={{ maxWidth: 400}} onMouseLeave={()=>setcantidadSeleccionada(0)} onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
      <CardHeader
        action={
          <Typography
            className='price'
            variant='h5'
            color='black'>
            <strong>{accounting.formatMoney(props.item.precioventa, "$")}</strong>
          </Typography>
        }
      />
      <Typography
        className='nn'
        style={{ fontWeight: 'bold', textAlign: 'left' }}
        variant='h6'>
        &#160; {props.item.descripcion}
      </Typography>

      <Link to={`/Detalle/${props.item.producto}`}>
        <CardMedia className='product--image'
          component="img"
          height="300"
          image={props.item.url_foto}
          alt="Cemento"
       
          onClick={handlerDetalleProducto}
        />
      </Link>

      <CardContent variant='body2' className="Card-Categoria" >
      {props.item.marca}
      </CardContent>

      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions >

      <Collapse in={expanded} timeout="auto" unmountOnExit >
        <CardContent >
          &#160;<ItemCount cantidadSeleccionada={cantidadSeleccionada} setcantidadSeleccionada={setcantidadSeleccionada} />
          <br></br>
          <Stack direction="row" spacing={3}>
            <Button onClick={() => props.numElementoHandler(detalleProducto)} variant="contained" color="primary" style={{ width: '100%' }}>
              Añadir
            </Button>
          </Stack>
        </CardContent>
      </Collapse>
    </Card>



  );
}












