import React, { useState } from "react";
import './EstiloContador.css';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export const ItemCount =(props)=>{
  

    const handleIncrement = () => {
      props.setcantidadSeleccionada(props.cantidadSeleccionada + 1);
                  //set actualiza el valor recibido de 14
    };
  
    const handleDecrement = () => {
      props.setcantidadSeleccionada(props.cantidadSeleccionada - 1);
    };



    return(
        <div  className="counter-prd">
            <RemoveIcon onClick={handleDecrement} fontSize="large"  color='primary'   cursor='pointer' />

       <input className="inputnum" type="numeric" value={props.cantidadSeleccionada || 0} onChange={(e)=>props.setcantidadSeleccionada(e.target.value)} />  

        <AddIcon onClick={handleIncrement} fontSize="large" color="primary"  cursor='pointer'/>
                             {/* //se manda a llamara a esta funcion*/}

        </div>
    );
}


export default ItemCount; 
