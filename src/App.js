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
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';



function Home(props) {
  return (
    <div>
      <Carousel />
      <CaruselProducto {...props} />
    </div>
  );
}
function App() {
  //variable para manejo de carrito
  const [countElemento, setcountElemento] = useState([]);
  const [login, setLogin] = useState({});
  const [oProducto, setoProducto] = useState({});
  const [crtCookie, setcrtCookie, eliminaCookie] = useCookies(['pedido']);
  const [userCookie, setuserCokie] = useCookies(['sesion']);
  const [varAux, setvarAux]= useState(false);
 
  function updatesetCountElemento(nwsetcountElemento) {
    setcountElemento(nwsetcountElemento);
    setcrtCookie('pedido', nwsetcountElemento, { path: '/', expires: new Date(Date.now() + 600000) });
    console.log("pedidos-", crtCookie);
  }
function cookieUsuario(datosUsuario){
  setLogin(datosUsuario)
  setuserCokie('sesion', datosUsuario, { path: '/', expires: new Date(Date.now() + 600000) });
}

  useEffect(() => {
    if (!!crtCookie.pedido) {
      setcountElemento(crtCookie.pedido);
    }

    if(!!userCookie.sesion){
      setLogin(userCookie.sesion)
  
      console.log("chk", userCookie.sesion)
      console.log("chk2", login)
    }          
    setTimeout(()=>{setvarAux(true)}, 2000)  
  }, [])

  if (!varAux){
    return(<div>cargando...</div>)
  }


  return (
    <Router>
      <Navbar value={countElemento.length} login={login} setLogin={cookieUsuario}/>
      <Routes>
        <Route path='/SignIn' element={<SignIn login={login} setLogin={cookieUsuario}/>} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Checkout' element={<CheckoutPage countElemento={countElemento} setcountElemento={updatesetCountElemento} />} />
        <Route path='/Detalle/:producto' element={<DetalleProducto oProducto={oProducto} countElemento={countElemento} setcountElemento={updatesetCountElemento} />} />
        <Route path='/:Categoria/:Subcategoria' element={<GridProductos countElemento={countElemento} setcountElemento={updatesetCountElemento} setoProducto={setoProducto} />} />
        <Route path='/Envios' element={login.username ? <DatosEnvio login={login}/>: <Navigate to='/SignIn?regresar=/Envios'/>} />
        {/*<Route path='/Cotizacion' element={<PDFFile/>} />*/}
        {/* <Route path='/Tabla' element={<TablaProductosPedido/>}/>*/}
        <Route path='/' element={<Home setcountElemento={updatesetCountElemento} countElemento={countElemento} setoProducto={setoProducto} />} />
      </Routes>

    </Router>
  );
}



export default App;
