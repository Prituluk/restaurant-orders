import React from "react"
import { OrderContext } from "../OrderContext"
import './NavOrders.css'

export function NavOrder(){

  const {
    searchValue,
    setSearchValue
  } = React.useContext(OrderContext)
  
  return(
    <nav>
      <div className="container-searched-orders">
        <input 
          className="searched-orders"
          type="text"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}/>
        <button 
          className="delete-searched"
          onClick={() => setSearchValue('') }
        >X</button>
      </div>
      
    </nav>
  )
}