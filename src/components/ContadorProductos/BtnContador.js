import React, { useState } from "react";
import './EstiloContador.css';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export const ItemCount =(props)=>{
  

    const handleIncrement = () => {
      props.setcantidadSeleccionada(props.cantidadSeleccionada + 1);

    };
  
    const handleDecrement = () => {
      props.setcantidadSeleccionada(props.cantidadSeleccionada - 1);
    };



    return(
        <div  className="counter-prd">
            <RemoveIcon onClick={handleDecrement} fontSize="large"  color='primary'   cursor='pointer' />

       <input className="inputnum" type="numeric" value={props.cantidadSeleccionada || 0} onChange={(e)=>props.setcantidadSeleccionada(e.target.value)} />  

        <AddIcon onClick={handleIncrement} fontSize="large" color="primary"  cursor='pointer'/>


        </div>
    );
}


export default ItemCount; 
