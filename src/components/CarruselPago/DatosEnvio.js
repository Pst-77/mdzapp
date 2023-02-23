import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './DatosEnvio.css'
import Mapa from '../Mapa/Mapa';
import { green } from '@mui/material/colors';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

class DatosEnvio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      lng: ''
    };
  }

  updateLatLong = (lat, lng) => {
    this.setState({
      lat: lat,
      lng: lng
    });
  }

  render() {
    return (
    <div className='container-addr-nvio-prd'>
      <div className='div-fm-der'>
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: '90%', '& td': { borderColor: 'red' } }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><h2>Datos de contacto</h2></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>  
              <TableCell component="th" scope="row">
              <TextField
                required
                id="firstName"
                name="firstName"
                label="Nombres(s)"
                fullWidth
                autoComplete="given-name"
                variant="standard"

              />
              </TableCell>
        </TableBody>

        <TableBody>
          <TableCell component="th" scope="row">
              <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Apellido(s)"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
              />
            </TableCell>
        </TableBody>
       
       <TableBody>
          <TableCell component="th" scope="row">
              <TextField
                required
                id="phone"
                name="phone"
                type="phone"
                label="Telefono"
                fullWidth
                autoComplete="family-name"
                variant="standard"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          />
          </TableCell>
       </TableBody>
       
       <TableBody>
          <TableCell component="th" scope="row">
              <TextField
                  required
                  id="lat"
                  name="lat"
                  label="Latitud"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                  value={this.state.lat}
              />
            </TableCell>
        </TableBody>

        <TableBody>
          <TableCell component="th" scope="row">
              <TextField
                  required
                  id="alt"
                  name="alt"
                  label="Altitud"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                  value={this.state.alt}
              />
            </TableCell>
        </TableBody>

        <TableBody>
        <br></br>
        <br></br>
          <div className='btn-ps-pg'>
            
        <Button variant="outlined">Guardar</Button>
        </div>
        </TableBody>


      </Table>
     </TableContainer>   
       </div>
      <div className='div-fm-izq'>
        <div className='mapa'>
          <Mapa/>
        </div>
       </div>
    </div>
  );
    }
  }
  export default DatosEnvio
