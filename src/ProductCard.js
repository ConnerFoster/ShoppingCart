import React from 'react'

const ProductCard = (props) => {
  return (
    <div>
      <div className='product-card'>
        <div className='product-card-imgdiv'>
          <img className='product-card-photo' src={props.image} alt='product' />
        </div>
        <h4>{props.title}</h4>
        <h5 className='product-card-price'>{props.price}</h5>
        <button type='button'>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard
