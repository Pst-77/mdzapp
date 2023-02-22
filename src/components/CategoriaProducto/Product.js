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
//import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import accounting from 'accounting';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ItemCount from '../ContadorProductos/BtnContador';
//import { style } from '@mui/system';



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



export default function GProducto({ pproduct: { id, name, productType, image, price, rating } }) {
  const [expanded, setExpanded] = React.useState(false);
  // const classes=stilos();
  //const { name, price, rating, image, description } = pproduct;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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

        className='nn' variant='h6'>
        &#160; {name}<br></br>
        &#160;"In stock"

      </Typography>
      <CardMedia
        component="img"
        height="370"
        image={image}
        alt="Cemento"


      />
      <CardContent variant='body2' color='textSecondary'>
        {productType}
      </CardContent>
      <CardActions disableSpacing>

        {Array(rating)
          .fill()
          .map((_, i) => (<p key={'ar' + i}>&#11088;</p>
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
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>

          <ItemCount />
          <br></br>
          <Stack direction="row" spacing={2}>
            <Button color="secondary">Secondary</Button>

          </Stack>


        </CardContent>
      </Collapse>
    </Card>
  );
}