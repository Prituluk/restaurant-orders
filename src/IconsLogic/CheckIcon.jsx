import React from "react"
import { Icons } from './Icons'


export function CheckIcon({completed, onComplete}) {
  return(
    <Icons
    type= "check"
    color= {completed ? 'green' : 'white'}
    onClick={onComplete}
    />

  )
}