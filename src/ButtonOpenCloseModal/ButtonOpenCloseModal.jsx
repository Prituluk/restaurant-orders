import React from "react"
import { OrderContext } from "../OrderContext"
import '../ModalProducts/ModalProducts.css'



export function ButtonOpenCloseModal({name, classname}) {
  const {
    clickOpenCloseModal
  } = React.useContext(OrderContext)

  clickOpenCloseModal;
  return(
    <button 
    className={classname}
    onClick={clickOpenCloseModal}
  
    >
      
      {name}
    </button>
    
  )
}