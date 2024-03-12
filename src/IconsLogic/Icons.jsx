import React from "react";
import { IoMdClose } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import '../App/App.css'
import './Icons.css'

export function Icons({type, color, onClick}) {

  const iconType = {
    "check" : (color) =>  <IoMdCheckmark className='icon-svg' fill={color}/>,
    "delete" : (color) =>  <IoMdClose className= 'icon-svg' fill={color}/> 
  }
  return (
    <span
     className={`icon icon-svg icon-${type}`}
     onClick={onClick}
    >
      {iconType[type](color)}
    </span>
  )
}
