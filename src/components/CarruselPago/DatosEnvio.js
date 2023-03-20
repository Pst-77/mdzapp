import * as React from 'react';
import TextField from '@mui/material/TextField';
import './DatosEnvio.css'
import Mapa from '../Mapa/Mapa';

import { useState } from 'react';

function DatosEnvio(props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  function handleNameChange(event) {
    const { value } = event.target;
    const valid = /^[A-Za-z\s]*$/.test(value);
    if (valid || value === "") {
      setName(value);
    }
  }

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code here to handle form submission
  }

  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <br></br>
          <br></br>
          <h1 align="center" style={{ fontSize: "4vh" }}>Datos de contacto</h1>
          <br></br>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '90vw', maxWidth: '599px' }}>
            <TextField required id="name" label="Nombre Completo" name="name" type="text"
              style={{ height: '6.2vh', width: '100%', backgroundColor: 'white', borderRadius: 10 }}
              value={name}
              onChange={handleNameChange}
              inputProps={{ maxLength: 50, pattern: "^[A-Za-z\\s]+$", title: "Solo se permiten letras"}}
            />
            <br></br>

            {/*Hebreos11.*/}
            <TextField required id="phone" label="Telefono de Contacto" name="phone" type="tel"
              style={{ height: '6.2vh', width: '100%', backgroundColor: 'white', borderRadius: 10 }}
              value={phone}
              onChange={handlePhoneChange}
              inputProps={{ maxLength: 10 }}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
            <br></br>
            <div style={{ width: '100%', minWidth: '500px' }}>
              <Mapa name={name} phone={phone}/>
              <br></br>
            </div>
           




          </div>
        </div>
      </form>
    </div>
  );
}
export default DatosEnvio;
