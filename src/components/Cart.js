import React from 'react'
import CartCard from './CartCard'

const Cart = (props) => {
  const closeCart = () => {
    const cart = document.getElementById('cart-page')
    cart.style.visibility = 'hidden'
  }

  return (
    <div id='cart-page'>
      <div className='cart-container'>
        <h2>Shopping Cart</h2>
        <button onClick={() => closeCart()}>X</button>
        <div className='cart-products'>
          {props.state.map((product, productIndex) => {
            return (
              <div key={productIndex}>
                <CartCard
                  incrementCart={props.incrementCart}
                  product={product}
                  decrementCart={props.decrementCart}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Cart
