import React from 'react'
import CartCard from './CartCard'

const Cart = (props) => {
  const closeCart = () => {
    const cart = document.getElementById('cart-page')
    const cartDiv = document.getElementById('cart-container')
    cartDiv.style.transform = 'translateX(95%)'

    cart.style.visibility = 'hidden'
  }

  return (
    <div id='cart-page'>
      <div id='cart-container'>
        <h2 id='cart-heading'>Shopping Cart</h2>

        <div className='cart-products'>
          {props.state?.map((product, productIndex) => {
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
        <button
          className='cart-buttons'
          id='close-btn'
          onClick={() => closeCart()}>
          Close
        </button>
        <button className='cart-buttons' id='checkout-btn'>
          Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart
