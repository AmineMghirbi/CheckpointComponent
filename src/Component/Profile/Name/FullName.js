import React from 'react'
import './FullName.css'
const FullName=({first,last})=> {
  return (
    <div>
      <h1>My first name is :{first}</h1>
      <h2>My last name is :{last}</h2>
    </div>
  )
}

export default FullName
