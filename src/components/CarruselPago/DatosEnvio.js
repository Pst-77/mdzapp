import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



import './DatosEnvio.css'

export default function AddressForm() {
  return (
    <React.Fragment>

      <Typography variant="h6" gutterBottom>
      <div className='tt-adrr-nvio'>
        Shipping address
        </div>
      </Typography>
      <div className='container-addr-nvio-prd'>
        <div>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Nombres(s)"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
      
        
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Epellido(s)"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        
        
        <TextField
          required
          id="lastName"
          name="Telefono"
          type="phone"
          label="Telefono"
          fullWidth
          autoComplete="family-name"
          variant="standard"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
/>
<TextField
          required
          id="lastName"
          name="Latitud"
          
          label="Latitud"
          fullWidth
          autoComplete="family-name"
          variant="standard"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
/>
<TextField
          required
          id="lastName"
          name="Altitud"
          
          label="Altitud"
          fullWidth
          autoComplete="family-name"
          variant="standard"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
/>
        </div>

        <div className='acrd-gg-nvio'>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
        </div>

 </div> 

    </React.Fragment>
  );
}