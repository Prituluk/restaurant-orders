import React from 'react'
import { Order } from '../Order'
import { CounterOrders } from '../CounterOrder'
import { NavOrder } from '../NavOrders'
import { ListOrders } from '../ListOrder'
import { CreateOrder } from '../CreateOrder'
import {OrdersLoading} from '../OrdersLoading'
import {OrdersError} from '../OrdersError'
import {EmptyOrderds} from '../EmptyOrderds'
import { Modal } from '../ModalProducts'
import { OrderContext } from '../OrderContext'
import '../ModalProducts/ModalProducts.css'
import './AppUi.css'
import { Products } from '../Products/Products'

export function AppUI() {
  const {
    openModal,
    setOpenModal,
  } = React.useContext(OrderContext)

  return (
    <>
      <h1 className='title'>List of Orders</h1>
      <NavOrder/>
      <CounterOrders/>
      <main className='main'>
        <OrderContext.Consumer>
          {({
             loading,
             error,
             searchedOrders,
             completedOrder,
             deleteOrder
          }) => (
            <ListOrders >
              {loading && <OrdersLoading/>}
              {error && <OrdersError/>}
              {(!loading && searchedOrders.length === 0) && <EmptyOrderds/>}
              {searchedOrders.map(order => (
                <Order 
                  order={order.text} 
                  key={order.text}
                  price={order.price}
                  products={order.products}
                  completed={order.completed}
                  onComplete={() => completedOrder(order.text)}
                  onDelete={() => deleteOrder(order.text)}
                />
              ))}
            </ListOrders>
          )}

        </OrderContext.Consumer>
        

      </main>
      <CreateOrder className="add-Order"/>
      {openModal && (
        
        <Modal>
          
          <section className='container-products'>
            <Products/>
          
          </section>
        </Modal>
      )}
    </>
  )
} 
