import React from "react"
import './AddProducts.css'

export function AddProducts(props) {

  // const [text, setText] = React.useState('');

  // const handleChangeProductText = (event) => {
  //   setText(event.target.value);
  //   // props.onChangeProductName(event.target.value);
  // };
  // console.log(text);

  const valuePrice = props.productPrice === 0 ? '' : props.productPrice;

  return (
    <div className='product add-product'>
    <input 
      type="text"  
      placeholder="Name Product"
      value={props.productName}
      onChange={props.onChangeProductName }
      />

    <input 
      type="number" 
      placeholder="precio"
      value={valuePrice}
      onChange={props.onChangeProductPrice}
      />
    <button
    onClick={props.onSubmitProduct}
    >Add</button>
  </div>
  )
}