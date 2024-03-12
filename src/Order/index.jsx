import { CloseIcon } from '../IconsLogic/CloseIcon'
import {CheckIcon} from '../IconsLogic/CheckIcon'
import './Order.css'


export function Order(props) {
console.log(props.price);
  return (
    <>
     <li className='order-list'>
      <div className='order-container'>
        <CheckIcon
          completed={props.completed}
          onComplete={props.onComplete}
        />
        <span className='order-name'>{props.order}</span>
        <span className='order-price'>$ {props.price}</span>
        
        <CloseIcon
          completed={props.completed}
          onDelete={props.onDelete}
        />

      </div>
    </li>
    </>
  )
}