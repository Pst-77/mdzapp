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
async function RegistrarUsuario({email, password, confirmarcontrasena, username}) {
  var myHeaders = new Headers();
  const oUsuario = {
    "username": username,
    "contrasena":password,
    "confirmarcontrasena":confirmarcontrasena,
    "correo":email
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
  var fetchApi = await fetch("https://adamant-reaction-production-44c6.up.railway.app/api/auth/signupcliente", requestOptions)
    .then(response=> response.status)
    .catch(error => console.log('error', error));
  return fetchApi;
}

const theme = createTheme();


const handleSubmit = (event, setStatus) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const ousuario={
    email: data.get('email'),
    password: data.get('password'),
    confirmarcontrasena:data.get('valida-pw'),
    nombre: data.get('firstName'),
    apellidos: data.get('lastName'),
    username:data.get('email'),
  };

  RegistrarUsuario(ousuario).then(respuesta=>{
    if (respuesta ===201){
      setStatus("usuario creado")
    }
    if (respuesta===404)
    {
      setStatus("el correo ya existe")

    }
    if (respuesta===400){
      setStatus("verifique su contraseña")
    }
  } 
  );
};


export default function SignUp() {
  const [status, setStatus] = React.useState('');
  

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
        Registro de Usuario
          </Typography>
          
          <Box component="form" noValidate onSubmit={(event)=>handleSubmit(event, setStatus)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="valida-pw"
                  label="Confirmar Password"
                  type="password"
                  id="valida-pw"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
              <Typography>
              {status}
              </Typography>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}