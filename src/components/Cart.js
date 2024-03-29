import {React, useEffect, useRef} from 'react'
import CartCard from './CartCard'

const Cart = (props) => {
  const closeCart = () => {
    const cart = document.getElementById('cart-page')
    const cartDiv = document.getElementById('cart-container')
    cartDiv.style.transform = 'translateX(95%)'
    cart.style.visibility = 'hidden'
  }

  const outsideRef = useRef(null)

  const handleClick = (e) => {
    if (outsideRef.current && !outsideRef.current.contains(e.target)) {
      closeCart()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick, true)
    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  })

  return (
    <div id='cart-page'>
      <div ref={outsideRef} id='cart-container'>
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
        <h3>Total: ${props.totalPrice}</h3>
        <button
          className='cart-buttons'
          id='close-btn'
          onClick={() => closeCart()}>
          Close
        </button>
        <button type='button' className='cart-buttons' id='checkout-btn'>
          Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart
