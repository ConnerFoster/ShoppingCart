import React from 'react'

const CartCard = (props) => {
  return (
    <div className='cart-card'>
      <div className='cart-card-img-container'>
        <img className='cart-card-img' src={props.product.image}></img>
      </div>
      <div className='cart-card-main'>
        <p>{props.product.title}</p>
        <p>${props.product.price}</p>
        <div className='cart-card-quantity'>
          <button
            onClick={() => props.decrementCart(Number(props.product.id))}
            type='button'
            className='qty-btns'>
            -
          </button>
          <p>{props.product.count}</p>
          <button
            onClick={() => props.incrementCart(Number(props.product.id))}
            type='button'
            className='qty-btns'>
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartCard
