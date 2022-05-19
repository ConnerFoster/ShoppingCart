import React from 'react'

const ProductCard = (props) => {
  return (
    <div>
      <div className='product-card'>
        <div className='product-card-imgdiv'>
          <img className='product-card-photo' src={props.photo}></img>
        </div>
        <h2>{props.title}</h2>
        <h4>{props.price}</h4>
      </div>
    </div>
  )
}

export default ProductCard
