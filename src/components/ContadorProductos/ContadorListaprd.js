import ItemCount from "./BtnContador";
import React from "./react"



export const LstCantidadPrd =()=>{
    const onAdd=(quantity)=>{
        console.log(`compraste ${quantity} unidades`)
    }
    return (
        <>
        <ItemCount initial={1} stock={7} onAdd={onAdd}/>
        </>
    )
}
export default LstCantidadPrd;