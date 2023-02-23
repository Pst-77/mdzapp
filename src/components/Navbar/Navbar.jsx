import React, { useRef } from 'react';
//import {VillaIcon} from '@mui/icons-material/Villa';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import "./Navbar.css";
import { Link } from 'react-router-dom';

import SimpleMenuConcreto from '../Menu/MenuConcreto';
import SimpleMenuAcero from '../Menu/MenuAcero';
import SimpleMenuFerretero from '../Menu/MenuFerretero';
// import Typography from '@mui/ma terial/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//import MenuIcon from '@mui/icons-material/Menu';

//import '../App.css';
import { Badge, Paper } from '@mui/material';





function Navbar(props) {
    
    const navref = useRef();
    const showNavBar = () => {
    
        navref.current.classList.toggle("responsive")
        //navref.current.classList.toggle("responsive" );
    };

    return (
      <div className="container">
        
        <h1>MADEZA</h1>
        
        <nav ref={navref}>
      
        <ul className="nav">
				<SimpleMenuConcreto/> 
        </ul>
        &nbsp;
        <ul className="nav">
				<SimpleMenuAcero/> 
        </ul>
        &nbsp;
        <ul className="nav">
				<SimpleMenuFerretero/> 
        </ul>
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