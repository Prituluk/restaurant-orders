import React from "react"
import { Icons } from './Icons'


export function CloseIcon({onDelete}) {
  return ( 
    <Icons
    type= "delete"
    color= 'white'
    onClick={onDelete}
    />

  )
}