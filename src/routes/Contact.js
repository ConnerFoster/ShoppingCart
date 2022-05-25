import React from 'react'
import {Header} from '../components/Header'
import {
  FaFacebookF,
  FaGithub,
  FaFacebookMessenger,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa'

const Contact = (props) => {
  return (
    <div>
      <Header
        bg='white'
        color='black'
        showCart={props.showCart}
        total={props.total}
      />
      <div className='contact-icons-div'>
        <FaFacebookF className='contact-icons' />
        <a
          style={{color: 'black'}}
          href='https://www.github.com/ConnerFoster'
          target={'_blank'}>
          <FaGithub className='contact-icons' />
        </a>
        <FaFacebookMessenger className='contact-icons' />
        <FaTwitter className='contact-icons' />
        <FaInstagram className='contact-icons' />
      </div>
      <div className='contact-text'>
        <h2>RTX Shop</h2>
        <h3>123 Main Drive, New York USA</h3>
        <h4>(123) 456 - 7890</h4>
      </div>
    </div>
  )
}

export default Contact
