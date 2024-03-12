import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './ModalProducts.css'
import { ButtonOpenCloseModal } from '../ButtonOpenCloseModal/ButtonOpenCloseModal';
import { OrderContext } from '../OrderContext';
import { AddProducts } from '../AddProducts';
import { Products } from '../Products/Products';
import { IoMdClose } from "react-icons/io";

export function Modal () {
  const {
    addOrder,
    addProduct,
    productItem,
    setProductItem,
    searchedProducts,
    clickOpenCloseModal,

  } =React.useContext(OrderContext)

  
  const [orders, setOrder] = React.useState({})
  const [orderName, setOrderName] = React.useState('')
  const [orderPrice, setOrderPrice] = React.useState('')
  const [productName, setProductName] = React.useState('')
  const [productPrice, setProductPrice] = React.useState(0)
  const [resetStock, setResetStock] = React.useState(false);

  const handleResetStock = () => {
    setResetStock(prevState => !prevState);
  };
console.log(resetStock);


  console.log(productName);
  const handleStockChange = (productName, newStock) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      [productName]: newStock,
    }));
  };

  const calcTotal = () => {
    let total= 0;
    for (const productName in orders) {
        const product = searchedProducts.find((p) => p.text === productName);
        total += product.price * orders[productName];
      }
      return total;
    }

  const onChangeOrder = (event) => {
    setOrderName(event.target.value);
  }
  const onChangeProductName = (event) => {
    setProductName(event.target.value);
  }
  const onChangeProductPrice = (event) => {
    setProductPrice(event.target.value);
  }

  const onSubmitOrder = () => {
    if (orders.hasOwnProperty(orderName)) {
      alert('Ya existe una orden con ese nombre');
      return;
    }
    addOrder(orderName, orderPrice);
    setOrder(prevOrders => ({
      ...prevOrders,
      [orderName]: {}
    }));
    setOrderName('')
    clickOpenCloseModal()
    // handleResetStock()
  }
  const onSubmitProduct = () => {
    if (productName && productPrice) {
      addProduct(productName, productPrice);
      setProductName('');
      setProductPrice(0)
    }else if (!productName && productPrice) {
      alert('Necesitas introducir un Nombre para el Producto')
    }
    else if (productName && !productPrice) {
      alert('Necesitas introducir un Precio para el Producto')
    }else {
      alert('Necesitas llenar los campos de "Nombre del Producto" y "Precio"')
    }
    

    console.log('asd');
  }
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log('enter');
      onSubmitOrder();
    }
  }
  useEffect(() => {
    setOrderPrice(calcTotal())
  }, [orders])

  const buttonBack = <IoMdClose />

  return ReactDOM.createPortal(
    <>
    <ButtonOpenCloseModal 
      classname={'products-back'} 
      name={buttonBack}
      
      />
    <h2 className='products-title'>Añade Productos y crea tu Orden</h2>
    <nav className='nav-products'>
      
      <input 
        value={productItem}
        onChange={(event) => setProductItem(event.target.value)}
        className='searchProducts' type="text" placeholder='Peperoni' />
    </nav>
    

    <div className='modal'>
      <AddProducts
        productName={productName}
        productPrice={productPrice}
        onChangeProductName={onChangeProductName}
        onChangeProductPrice={onChangeProductPrice}
        onSubmitProduct={onSubmitProduct}  
        setProductName={setProductName}

      />
      {searchedProducts.map(( product, index) => (
        <Products
          product={product.text}
          key={product.text}
          price={product.price}
          ingredientes={product.ingredientes}
          pedidos={product.pedidos}
          onStockChange={handleStockChange}
          handleResetStock={handleResetStock}
          onSubmitOrder={onSubmitOrder}
          resetStock={resetStock}
        />
      ) )}
    </div>
    <section className='container-add-order'>
      <button
      className='add-Order no-close'
      onClick={onSubmitOrder}
      >Add Order</button>
      <input 
        type="text"  
        placeholder='Orden'
        value={orderName}
        onChange={onChangeOrder}
        onKeyDown={handleKeyPress}
        />
      <span>Total ${calcTotal()}</span>
    </section>
    </>,
    document.getElementById('modal')
  )
}


