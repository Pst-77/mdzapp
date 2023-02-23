
import * as React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './Product';
import {_products} from './product-data';



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};






export default function CaruselProducto(props) {
  function addToBasket(){
    props.setcountElemento(props.countElemento+ 1)

  }
  
const product = _products.map((item) => ( 
  <Product 
    key={item.id + 'prt'}
    name={item.name}
    producTypes={item.productType}
    price={item.price}
    rating={item.rating}
    image={item.image}
    numElementoHandler={addToBasket}
    //description={item.description}
    
  />
));
  
  return (

    <div >
      
      <h1>&#160;&#160;Nuestros Productos</h1>
      <Carousel responsive={responsive}>
      {product}
      </Carousel>
    </div>

  );
} 

