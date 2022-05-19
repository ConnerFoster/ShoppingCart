import React from 'react'
import background from '../photos/gpu.jpg'
import {Header} from '../components/Header'
import {Link} from 'react-router-dom'

const Home = (props) => {
  console.log(props.state)
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100vw',
      }}
      className='App'>
      <Header />

      <div className='shop-button'>
        <h1 id='home-main-text'>Nvidia GeForce RTX 3090 Ti</h1>
        <h3 id='home-secondary-text'>Available Now</h3>
        <Link to='/products'>
          <button id='shop-btn'>Shop Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
