import * as React from 'react';
import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert';

const styles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 9999,
};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AlertProduct({mensaje}) {
  const [open, setOpen] = React.useState(mensaje);

  
  
const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

    return (
      <Stack spacing={2} sx={{ width: '100%' }}>
    
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
    Producto agregado al carrito!
        </Alert>
      </Snackbar>

    </Stack>
    );
  }
  
  
  
  
  
  