import * as React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './Product';
import {_productoApitemp} from './product-data';
import { addToBasket } from '../../tool/tool';
import AlertProduct from '../Alert/Alerts';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


export default function CaruselProducto(props) {
  const [showAlert, setShowAlert] = React.useState(false);

  function addToBasketBridge(detalleProducto){
  addToBasket(detalleProducto, props.countElemento, props.setcountElemento);
     //setShowAlert(true);
  }

 const product = _productoApitemp.map((item) => ( 
  <Product  item={item}
    key={item.id + 'prt'}
    numElementoHandler={addToBasketBridge} setoProducto={props.setoProducto}
  />
 ));
  return (
    <div className='container-crsl-prd'>
      <h1>&#160;&#160;Nuestros Productos</h1>
      <br></br>
      <Carousel responsive={responsive}>
      {product}
      </Carousel>
 
      <br></br>
    </div>
  );
} 

