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
import Mapa from './components/Mapa/Mapa';

function Home (props){
  return (
  <div>
          <Carousel/>
          <CaruselProducto {...props}/>
  </div>
  );
}
function App() {
  const [countElemento, setcountElemento] = useState([]);
  
 

  return (
    <Router>
      <Navbar value={countElemento.length}/>
      <Routes>
        <Route path='/SignIn' element={<SignIn/>}/> 
        <Route path='/Checkout' element={<CheckoutPage countElemento={countElemento} setcountElemento={setcountElemento}/> }/>
        <Route path='/DetalleProducto' element={<DetalleProducto/>}/>
        <Route path='/GridProducto' element={<GridProductos/>}/>
        <Route path='/Envios' element={<DatosEnvio/>}/>
        <Route path='/Mapa' element={<Mapa/>}/>
        <Route path='/' element={<Home setcountElemento={setcountElemento} countElemento={countElemento}/>}/>
      </Routes>

    </Router>
  );
}



export default App;
