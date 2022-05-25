import React from 'react'
import {Header} from '../components/Header'
import ProductCard from '../ProductCard'

const ProductsPage = (props) => {
  return (
    <div>
      <Header
        bg='white'
        color='black'
        showCart={props.showCart}
        total={props.total}
      />
      <div className='product-cards-container'>
        {props.products.map((product, productIndex) => {
          return (
            <div key={productIndex}>
              <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
                obj={product}
                updateCart={props.updateCart}
                showCart={props.showCart}
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
