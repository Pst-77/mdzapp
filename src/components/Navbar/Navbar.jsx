import React, { useRef } from 'react';
//import {VillaIcon} from '@mui/icons-material/Villa';
import {Airplay} from '@mui/icons-material';
import "./Navbar.css";
import { Link } from 'react-router-dom';



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
        <Link to ="/">
        <h1>MADEZA</h1>
        </Link>
        <nav ref={navref}>
      
        <ul className="nav">
				  <li><a href="">Cementos</a></li>
				  <li><a href="">Aceros</a></li>
          <li><a href="">Concretos</a></li>
				  <li><a href="">Ferreteria</a></li>
					   
        </ul>
           {/* <a href="/#">Home</a>
            
            <a href="/#">Cementos</a>
            <a href="/#">Aceros</a>
            <a href="/#">Ferreteria</a>
    */}

    <div className="right">
          <Link to="/SignIn">
          <div>
          &#160;<Button variant='outlined' color="inherit">Login</Button>
          </div>
          </Link>
          <div>
          {/* <Typography variant="h7" component="div" color="whitesmoke" sx={{ flexGrow: 1 }}>
          &#160;Hello Gest&#160;   
          </Typography> */}
          </div>
          
          <Link to="/Checkout">
          <IconButton>
          <Badge badgeContent={props.value || 0} color="secondary">
          <ShoppingCartIcon sx={{ color:'white' }} fontSize="large"/>
          </Badge>
          </IconButton>&#160;
          </Link>
    </div>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
        <Airplay/>
        </button>

        </nav>

        <button className="nav-btn" onClick={showNavBar}>
        <Airplay/> 
        </button>
        
      </div>
    );
  }


export default Navbar;