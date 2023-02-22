import React, { useState } from "react";
import './EstiloContador.css';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export const ItemCount =({initial, stock, onAdd})=>{
  const [value, setValue] = useState(0);

    const handleIncrement = () => {
      setValue(value + 1);

    };
  
    const handleDecrement = () => {
      setValue(value - 1);
    };



    return(
        <div disabled={value === 0} className="counter-prd">
            <RemoveIcon onClick={handleDecrement} fontSize="large"  color='primary'   cursor='pointer' />

       <input className="inputnum" type="numeric" value={value || 0} />  

        <AddIcon onClick={handleIncrement} fontSize="large" color="primary"  cursor='pointer'/>


        </div>
    );
}


export default ItemCount; 
