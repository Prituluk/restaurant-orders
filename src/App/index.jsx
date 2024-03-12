import React from 'react'
import './App.css'
import { useLocalStorage } from '../Hooks/Storage'
import { AppUI } from './AppUI'
import { OrderProvider } from '../OrderContext'
// const defaultOrders = [
//   {text: 'order 1', completed: true, precio: 0, producto: '', cantidad: 0},
//   {text: 'order 2', completed: true, precio: 0, producto: '', cantidad: 0},
//   {text: 'order 3', completed: true, precio: 0, producto: '', cantidad: 0},
//   {text: 'order 4', completed: true, precio: 0, producto: '', cantidad: 0},
//   {text: 'order 5', completed: false, precio: 0, producto: '', cantidad: 0},
//   {text: 'order 6', completed: false, precio: 0, producto: '', cantidad: 0}
// ];


//   window.localStorage.setItem('ORDER_V1', JSON.stringify(defaultOrders));


// const defaultProducts = [
//   {text: 'Comun', price: 20, ingredientes: 'tomate, queso', pedidos: 0},
//   {text: 'Fugazzata', price: 13, ingredientes: 'salsa, queso, cebolla', pedidos: 0},
//   {text: 'Peperoni', price: 14, ingredientes: ' salsa, peperoni', pedidos: 0},
//   {text: 'Muzarella', price: 15, ingredientes: 'salsa, muzzarela', pedidos: 0},
//   {text: 'Chanpignon', price: 21, ingredientes: 'salsa, champignon', pedidos: 0},
//   {text: 'Anchoas', price: 18, ingredientes: 'salsa, queso, anchoas', pedidos: 0}
// ];


//   window.localStorage.setItem('PRODUCT_V1', JSON.stringify(defaultProducts));
  // const asd = JSON.parse('ORDER_V1');
  // console.log(asd);


function App() {
  return(
    <OrderProvider>
      <AppUI/>
    </OrderProvider>
  )
}

export default App
