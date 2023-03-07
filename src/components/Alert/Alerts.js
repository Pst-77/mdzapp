import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function AlertProduct() {
    const [open, setOpen] = React.useState(true);
    
    React.useEffect(() => {
        const timer = setTimeout(() => {setOpen(false);}, 2000);
        return () => clearTimeout(timer);
        }, []);

    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
        {open ? (
          <Alert
            sx={{ backgroundColor: 'green', color: 'white', fontWeight: 'bold' }}
            severity="success"
            onClose={() => {
              setOpen(false);
            }}
            autoHideDuration={2000}
          >
            Producto agregado
          </Alert>
        ) : null}
      </Stack>
    );
  }
  
  
  
  
  
  