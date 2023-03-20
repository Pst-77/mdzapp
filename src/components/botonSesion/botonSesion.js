import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react';
import { TextField } from '@mui/material';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';


export default function BotonSesion({login, setLogin}) {

    const navegar = useNavigate();

    function oFunciones(){
        navegar('/');
        setLogin({});

    }

  return (

         !!login.username ?
         <Fragment >
         <Button  variant='outlined' color="inherit"  style={{ color: 'orange' }}> <PersonSharpIcon/> &nbsp;{login.apellidos}</Button>&nbsp;
         <Button onClick={oFunciones} variant='outlined' color="inherit">Cerrar Sesión</Button>
         </Fragment>
         :
        <Button onClick={()=> navegar('/SignIn?regresar=/')} variant='outlined' color="inherit">Login</Button>
    
  )
}
