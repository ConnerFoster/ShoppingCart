import React from 'react'
import {Link} from 'react-router-dom'
import {CgShoppingCart} from 'react-icons/cg'

export const Header = (props) => {
  return (
    <div className='nav' style={{backgroundColor: props.bg}}>
      <div>
        <Link style={{color: props.color}} className='links' to='/'>
          <h2 id='header-brand'>RTX SHOP</h2>
        </Link>
      </div>
      <div className='nav-links'>
        <Link style={{color: props.color}} className='links' to='/'>
          Home
        </Link>
        <Link style={{color: props.color}} className='links' to='/products'>
          Shop
        </Link>
        <Link style={{color: props.color}} className='links' to='/contact'>
          Contact
        </Link>
        <a
          style={{color: props.color}}
          className='links'
          onClick={() => props.showCart()}>
          <CgShoppingCart />
        </a>

        <p style={{color: props.color}} id='header-count'>
          {props.total}
        </p>
      </div>
    </div>
  )
}

Header.defaultProps = {
  bg: 'rgba(0,0,0,0.1)',
  color: 'white',
}
