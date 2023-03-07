import React, { useRef, useEffect, useState } from 'react';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Paper } from '@mui/material';
import ListMenu from '../Menu/ListMenu';
import groupByToMap from "core-js/actual/array/group-by-to-map";
import { useParams } from 'react-router-dom';
import BuildCategoria from './BuildCategoria';

function Navbar(props) {
  const navref = useRef();
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const categoriasAPI = await BuildCategoria();
      setCategorias(categoriasAPI);
      console.log(categoriasAPI);
    };
    fetchData();
  }, []);

  const showNavBar = () => {
    navref.current.classList.toggle("responsive");
  };
  
  return (
    <div className="container">
      <Link to="/" style={{color:'white', textDecoration:'none'}}><h1>MADEZA</h1></Link>
      
      <nav ref={navref}>
       {categorias.map((itemCategorias, index) => (
          <ul key={index} className="nav">
           <ListMenu  nomMenu={itemCategorias.categoria} nomSubMenu={itemCategorias.subcategorias.split(',').sort()}/>
          </ul>
       ))}
        &nbsp;
        <ul>
          <Link to="/SignIn">
            <Button variant='outlined' color="inherit">Login</Button>
          </Link>
        </ul> 
        <ul>
          <Link to="/Checkout">
            <IconButton>
              <Badge badgeContent={props.value || 0} color="secondary">
                <ShoppingCartIcon sx={{ color:'white' }} fontSize="large"/>
              </Badge>
            </IconButton>
          </Link>
        </ul>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <MenuOpenIcon/>
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <MenuOpenIcon/> 
      </button>
    </div>
  );
}
export default Navbar;

