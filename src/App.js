//import Product from './components/homeProductos/Product';
import './App.css';
import CheckoutPage from './components/Check/CheckoutPage.js';
import Carousel from './components/Carousel/Slider';
import CaruselProducto from './components/homeProductos/Products';
import Navbar from './components/Navbar/Navbar';
import DetalleProducto from './components/ProductoPage/ProductoPage';
import GridProductos from './components/CategoriaProducto/Products';
import SignIn from './components/Login/SignIn';
import DatosEnvio from './components/CarruselPago/DatosEnvio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from "react";

function Home (props){
  return (
  <div>
          <Carousel/>
          <CaruselProducto setValue={props.setValue} value={props.value}/>
  </div>
  );
}


function App() {

  const [value, setValue] = useState(0);

  return (
    <Router>
      <Navbar value={value}/>
      <Routes>
        <Route path='/SignIn' element={<SignIn/>}/> 
        <Route path='/Checkout' element={<CheckoutPage/>}/>
        <Route path='/DetalleProducto' element={<DetalleProducto/>}/>
        <Route path='/GridProducto' element={<GridProductos/>}/>
        <Route path='/Envios' element={<DatosEnvio/>}/>
        <Route path='/' element={<Home setValue={setValue} value={value}/>}/>
      </Routes>

    </Router>
  );
}



export default App;
