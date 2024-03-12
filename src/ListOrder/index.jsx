import './ListOrder.css'

export function ListOrders({children}) {
  return (
    <ul className='orders-content'>
      {children}
    </ul>
  )
}