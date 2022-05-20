import React from 'react'
import {Header} from '../components/Header'
import ProductCard from '../ProductCard'
import photo from '../photos/rtx-3080.png'

const ProductsPage = (props) => {
  return (
    <div>
      <Header bg='white' color='black' />
      <div className='product-cards-container'>
        {props.products.map((product, productIndex) => {
          console.log(product.image)
          return (
            <div key={productIndex}>
              <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductsPage

//
