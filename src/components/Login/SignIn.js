import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

async function llamadaApiUsuario(inputUserName, inputPassword) {
  var respuesta = false;
  var myHeaders = new Headers();
  const oUsuario = {
    "username": inputUserName,
    "password": inputPassword,
  }
  // myHeaders.append("x-access-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjc3NDQwNTk2LCJleHAiOjE2Nzc3NDA1OTZ9.BEe8f52SKQcLL7E2ghZIWq22lkv-Gyv79eGkby4GSGs");
  myHeaders.append("Content-Type", "application/json")
  var requestOptions = {
    method: 'POST',
    body: JSON.stringify(oUsuario),
    headers: myHeaders,
    redirect: 'follow'
  };

  // peticion asincrona (si espera) 
  var fetchApi = await fetch("https://adamant-reaction-production-44c6.up.railway.app/api/auth/signin", requestOptions)
    .then(response => response.json())
    .then(result => result.token)
    .catch(error => console.log('error', error));
  
  return fetchApi;
}

async function datosApiUsuario(inputUserName, tokenUsuario){
  var myHeaders = new Headers();
  
  myHeaders.append("Content-Type", "application/json")
  myHeaders.append("x-access-token", tokenUsuario)
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  var fetchApi= await fetch (`https://adamant-reaction-production-44c6.up.railway.app/api/get/usuariosuser/${inputUserName}`, requestOptions)
  .then(response => response.json())
  .then(result => result.data)
  .catch(error => console.log('error', error));

console.log(fetchApi);
return fetchApi;

}



const theme = createTheme();

export default function SignIn({  setLogin }) {
  var params = new URL(document.location).searchParams
  var regresar = params.get('regresar')
  const navegar = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    llamadaApiUsuario(data.get('email'), data.get('password')).then(async (respuesta) =>  {
      if (!!respuesta) { 
        
        let datosUsuario = await datosApiUsuario(data.get('email'), respuesta);
        datosUsuario.token=respuesta
        setLogin(datosUsuario)
        navegar(regresar)
      }
      else {
        alert('credencial invalida')
      }
    })
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };





  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus

            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"

            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type='submit'  //{() => navegar('/' + regresar)}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='SignUp' variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}