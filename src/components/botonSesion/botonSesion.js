import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react';
import { TextField } from '@mui/material';


export default function BotonSesion({login, setLogin}) {

    const navegar = useNavigate();

    function oFunciones(){
        navegar('/');
        setLogin({});

    }

  return (

         !!login.username ?
         <Fragment>
         <Button onClick={oFunciones} variant='outlined' color="inherit">Cerrar Sesion</Button>
         <h3>{login.apellidos}</h3>
         </Fragment>
         :
        <Button onClick={()=> navegar('/SignIn?regresar=')} variant='outlined' color="inherit">Login</Button>
    
  )
}
