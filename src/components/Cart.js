import React from 'react'
import CartCard from './CartCard'

const Cart = (props) => {
  return (
    <div className='cart-page'>
      <div className='cart-container'>
        <h2>
          Shopping Cart <span>&#10006;</span>
        </h2>
        <div className='cart-products'>
          {props.state.map((product, productIndex) => {
            return (
              <div key={productIndex}>
                <CartCard product={product} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Cart
