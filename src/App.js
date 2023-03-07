//import Product from './components/homeProductos/Product';
import './App.css';
import CheckoutPage from './components/Check/CheckoutPage.js';
import Carousel from './components/Carousel/Slider';
import CaruselProducto from './components/homeProductos/Products';
import Navbar from './components/Navbar/Navbar';
import DetalleProducto from './components/ProductoPage/DetalleProducto';
import GridProductos from './components/CategoriaProducto/Products';
import SignIn from './components/Login/SignIn';
import SignUp from './components/Login/SignUp'
import DatosEnvio from './components/CarruselPago/DatosEnvio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Mapa from './components/Mapa/Mapa';
import useCookies from 'react-cookie/cjs/useCookies';
import { Timelapse } from '@mui/icons-material';



function Home (props){
  return (
  <div>
          <Carousel/>
          <CaruselProducto {...props}/>
  </div>
  );
}
function App() {
  //variable para manejo de carrito
  const [countElemento, setcountElemento] = useState([]);
  const [login, setLogin]=useState();
  const [oProducto, setoProducto]= useState({});
  const [crtCookie, setcrtCookie, eliminaCookie]= useCookies(['pedido']);


function updatesetCountElemento(nwsetcountElemento){
  setcountElemento(nwsetcountElemento);
  setcrtCookie('pedido', nwsetcountElemento, { path: '/', expires: new Date(Date.now() + 500000)});
  console.log(crtCookie);
  
}



useEffect(() => {
  if(!!crtCookie.pedido){

    setcountElemento(crtCookie.pedido);

  }

}, [])


  return (
    <Router>
     
      <Navbar value={countElemento.length}/>
      <Routes>
        <Route path='/SignIn' element={<SignIn />}/> 
        <Route path='/SignUp' element={<SignUp />}/> 
        <Route path='/Checkout' element={<CheckoutPage countElemento={countElemento} setcountElemento={updatesetCountElemento}/> }/>
        <Route path='/Detalle/:producto' element={<DetalleProducto oProducto={oProducto} countElemento={countElemento} setcountElemento={updatesetCountElemento}/>}/>
        <Route path='/:Categoria/:Subcategoria' element={<GridProductos countElemento={countElemento} setcountElemento={updatesetCountElemento} setoProducto={setoProducto}/>}/>
        <Route path='/Envios' element={<DatosEnvio/>}/>
        <Route path='/Mapa' element={<Mapa/>}/>
   
       {/* <Route path='/Tabla' element={<TablaProductosPedido/>}/>*/}
        <Route path='/' element={<Home setcountElemento={updatesetCountElemento} countElemento={countElemento} setoProducto={setoProducto}/>}/>
      </Routes>

    </Router>
  );
}



export default App;
