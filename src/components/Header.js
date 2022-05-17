import React from 'react'
import {Link} from 'react-router-dom'
import {CgShoppingCart} from 'react-icons/cg'

export const Header = () => {
  return (
    <div className='nav'>
      <div>
        <Link className='links' to='/'>
          <h2 id='header-brand'>RTX SHOP</h2>
        </Link>
      </div>
      <div className='nav-links'>
        <Link className='links' to='/'>
          Home
        </Link>
        <Link className='links' to='/products'>
          Shop
        </Link>
        <Link className='links' to='/contact'>
          Contact
        </Link>
        <Link className='links' to='/cart'>
          <CgShoppingCart />
        </Link>
      </div>
    </div>
  )
}
