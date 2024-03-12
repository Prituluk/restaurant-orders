import React from "react";
import { useLocalStorage } from "../Hooks/Storage";
// import React, { createContext, useContext, useState } from "react";
const OrderContext = React.createContext();

function OrderProvider({ children }) {

  const {
    item : orders, 
    saveItem : saveOrder,
    loading,
    error
  } = useLocalStorage('ORDER_V1', []);

  const {
    item : products, 
    saveItem : saveProduct
  } = useLocalStorage('PRODUCT_V1', []);

  const [searchValue, setSearchValue] = React.useState('')
  const [openModal, setOpenModal] = React.useState(false)
  const [productItem, setProductItem] = React.useState('')
 
  const orderState = orders.length
  const orderCompleted = orders.filter(order => !!order.completed).length
 
  const searchedOrders = orders.filter((order) => { 
    return order.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
  })
   
  const productsItems = products.map( product => product);
  const searchedProducts = products.filter((product) => { 
    return product.text.toLowerCase().includes(productItem.toLocaleLowerCase())
  })

  const addOrder = (text, price) => {
  const newOrder = [...orders];
  newOrder.push({
    text,
    price,
    completed: false
  });
  saveOrder(newOrder);

}
const addProduct = (text, price) => {
  const newProduct = [...products];
  newProduct.push({
    text,
    price
  });
  saveProduct(newProduct);
}
  

const completedOrder = (text) => {
  const newOrders = [...orders];
  const indexOrder  = newOrders.findIndex((order) => {
    return order.text === text
  });
  const asd = newOrders[indexOrder].completed
  if(indexOrder !== -1) {
    newOrders[indexOrder].completed = true;
    saveOrder(newOrders);
  } 
  if(asd === true) {
    newOrders[indexOrder].completed = false;
    saveOrder(newOrders);
  }
  console.log(asd);
}

const deleteOrder = (text) => {
  const newOrders = [...orders];
  const indexOrder  = newOrders.findIndex((order) => {
    return order.text === text
  });
  if(indexOrder !== -1) {
    newOrders.splice(indexOrder, 1);
    saveOrder(newOrders);
  }
}

const state = orders.filter(order => !!order.completed === false).length
const ordenesCompletadas = () => {
 if(state === 0){
 }
}
ordenesCompletadas(state);

const clickOpenCloseModal = () => {
  setOpenModal (state => !state );
  setProductItem('');
  const classValidation = document.querySelector('#modal').classList;
  if (classValidation[0] === 'modal-position') {
    document.querySelector('#modal').classList.remove('modal-position');
  }else {
    document.querySelector('#modal').classList.add('modal-position');
  }

};

  return(
    <OrderContext.Provider value= {{
      loading,
      error,
      searchValue,
      setSearchValue,
      orderCompleted,
      orderState,
      searchedOrders,
      completedOrder,
      deleteOrder,
      openModal,
      setOpenModal,
      productsItems,
      searchedProducts,
      productItem,
      setProductItem,
      clickOpenCloseModal,
      addOrder,
      addProduct,

    }}>
      {children}
    </OrderContext.Provider>

  )
}

export {OrderContext, OrderProvider};