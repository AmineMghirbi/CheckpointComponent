import React from 'react'
import './Address.css'
const Address=({rue,ville,codepostal})=> {
  return (
    <div>
      <h3>Address : {rue},{codepostal} {ville}</h3>
    </div>
  )
}

export default Address
