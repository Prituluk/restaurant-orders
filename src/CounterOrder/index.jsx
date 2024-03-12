import React from 'react'
import { OrderContext } from '../OrderContext'

export function CounterOrders(){

  const {
    orderState, 
    orderCompleted, 
    loading,
    searchedOrders
   } = React.useContext(OrderContext)

   const Message = () => {
    
    if (loading) {
      return 'Cargando...'
    }
    if (orderState === 0) {
      return 'Agregar Ordenes '
    }
    if (orderCompleted ===  0 && searchedOrders.length !== 0) {
      return 'Todavía no completaste ni una Orden'
    }
    if (orderState === orderCompleted && orderState > 0 && searchedOrders.length !== 0) {
      return 'Completaste todas las Ordenes'
    }
    if (searchedOrders.length === 0 ) {
      return 'La Orden solicitada no existe'
    }
  
    return `Completaste ${orderCompleted} de ${orderState} Ordenes`
   }
  
  return(
    <>
      <h2>
        {Message()}
      </h2>
      
    </>
  )

}