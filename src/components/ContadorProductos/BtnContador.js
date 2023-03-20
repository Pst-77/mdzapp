import React, { useState } from "react";
import './EstiloContador.css';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Input } from '@mui/material';

export const ItemCount =(props)=>{
  
    const handleIncrement = () => {
      if(props.cantidadSeleccionada >=0 && props.cantidadSeleccionada <= 6999){
      props.setcantidadSeleccionada(props.cantidadSeleccionada + 1);
                  //set actualiza el valor recibido de 14
    }};
  
    const handleDecrement = () => {
      if (props.cantidadSeleccionada>0)
      props.setcantidadSeleccionada(props.cantidadSeleccionada - 1);
    };
    const handleInput = (event) => {
      // Validar que la tecla presionada sea un número
      if (isNaN(event.key)) {
        event.preventDefault();
      }
    };
   

    return(
        <div  className="counter-prd">
            <RemoveIcon onClick={handleDecrement} fontSize="large"  color='primary'   cursor='pointer' />

       
       {/*<input type="text"  onKeyPress={handleInput} onPaste={(e) => e.preventDefault()} className="inputnum" value={props.cantidadSeleccionada || 0} onChange={(e)=>props.setcantidadSeleccionada(e.target.value)}/>*/}
          <input type="text" onKeyPress={handleInput} onPaste={(e) => e.preventDefault()} className="inputnum"  value={props.cantidadSeleccionada || '0'} onChange={(e) => {const value = e.target.value; if (value === '' || parseInt(value) <= 7000) { props.setcantidadSeleccionada(value); } else { props.setcantidadSeleccionada('7000');} }} />
        <AddIcon onClick={handleIncrement} fontSize="large" color="primary"  cursor='pointer'/>
                             {/* //se manda a llamara a esta funcion*/}

        </div>
    );
}

export default ItemCount; 
