import React, { useContext } from 'react'
import { BookContext } from '../context'


const showCart = () => {
    const [state, dispatch] = useContext(BookContext)
    console.log(state)
  return (
    <div>
      <h1>this is cart</h1>
    </div>
  )
}

export default showCart
