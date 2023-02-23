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
import {useStateValue} from '../../CtxApii/StateProvider'
import {_products, responsive} from './product-data';
import { ActionTypes } from '@mui/base';
import './producthome.css'
import { actionTypes } from '../../CtxApii/reducer.js';




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
  const[{basket}, dispatch]=useStateValue();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

 
  // const [value, setValue] = React.useState(0);
  // const addProductos = () => {
  // }



  return (
  
     
    <Card sx={{ maxWidth: 400 }}>
      <CardHeader
        action={
          <Typography
            className='price'
            variant='h5'
            color='textSecondary'>
            {accounting.formatMoney(props.price, "$")}
          </Typography>
        }
      />
      <Typography
        className='nn'
        style={{ fontWeight: 'bold', textAlign:'left'}}
        variant='h6'>
        &#160; {props.name}
    
      </Typography>
      <Typography>
        <p className='stk-prd'>&nbsp;&nbsp;"In stock"</p>
      </Typography>
      <CardMedia  className='product--image'
        component="img"
        height="300"
        image={props.image}
        alt="Cemento"
      />
      <CardContent variant='body2' color='textSecondary'>
        {props.productType}
      </CardContent>
      <CardActions disableSpacing>
        {Array(props.rating)
          .fill()
          .map((_, i) => (<p key={i}>&#11088;</p>
          ))}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit >
        <CardContent >
        &#160;<ItemCount setValue={props.setValue} value={props.value} />
          <br></br>
          <Stack direction="row" spacing={3}>
            <Button onClick={props.numElementoHandler} variant="contained" color="primary" style={{ width: '100%'}}>
              Añadir
            </Button>
          </Stack>
        </CardContent>
      </Collapse>
    </Card>
        
      
  
  );
}















{/*


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
import accounting from 'accounting';
import ItemCount from '../homeProductos/Products';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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


export default function Product({ pproduct: { id, name, productType, image, price, rating } }) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [value, setValue] = React.useState(0);
  const addProductos = () => {
  }
  return (
    <Card sx={{ maxWidth: 370 }}>
      <CardHeader
        action={
          <Typography
            className='price'
            variant='h5'
            color='textSecondary'>
            {accounting.formatMoney(price, "$")}
          </Typography>
        }
      />
      <Typography
        className='nn'
        variant='h5'>
        &#160; {name}<br></br>
        &#160;"In stock"
      </Typography>
      <CardMedia
        component="img"
        height="350"
        image={image}
        alt="Cemento"
      />
      <CardContent variant='body2' color='textSecondary'>
        {productType}
      </CardContent>
      <CardActions disableSpacing>
        {Array(rating)
          .fill()
          .map((_, i) => (<p key={i}>&#11088;</p>
          ))}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit >
        <CardContent >
          <ItemCount />
          <br></br>
          <Stack direction="row" spacing={3}>
            <Button variant="contained" color="secondary">
              Añadir
            </Button>
          </Stack>
        </CardContent>
      </Collapse>
    </Card>
        
  );
}


*/}