// import { Modal } from '../ModalProducts'
// import React from 'react'
import React, { useState, useEffect } from 'react'
import '../ModalProducts/ModalProducts.css'

export function Products(props) {
  const [stock, setStock] = React.useState(0)
  const [total, setTotal] = React.useState(0);
  // DEBT: STOCK RESET WHEN CLICKING ON "ADD ORDER" TO NOT CLOSE MODAL
  // const [orderedProducts, setOrderedProducts] = React.useState('')
  // useEffect(() => {
  //   if (props.resetStock) {
  //     setStock(0);
  //   }
  // }, [props.resetStock]);
  // useEffect( () => {
  //   const newOrderedProducts = stock === 0 ? '' : stock;
  //   setOrderedProducts(newOrderedProducts)
  //   }, [props.handleResetStock])
  
  const addStock = () => {
    const newStock = stock + 1;
    setStock(newStock);
    props.onStockChange(props.product, newStock);
  }
  console.log(stock);

  const handleCliclRight = (e) => {
    e.preventDefault();
    if (stock > 0) {
      const newStock = stock - 1;
      setStock(newStock)
      props.onStockChange(props.product, newStock);
    }
  }
  const orderedProducts = stock === 0 ? '' : stock;

   useEffect(() => {
    const asd = props.price * stock;
    setTotal(asd);    
  }, [stock, props.price]);


  return(
    <>

      <div 
      onClick={addStock}
      onContextMenu={handleCliclRight}
      className='product'
      >
        <span className='name-product'>{props.product}</span>
        <span className='stock'>{orderedProducts}</span>
        <span className='price'>{`$${props.price}`}</span>
      </div>
    </>

  )
}