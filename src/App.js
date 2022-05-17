import {Link} from 'react-router-dom'
import background from './storewatches-hero.png'
import {CgShoppingCart} from 'react-icons/cg'

function App() {
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
      <div className='nav'>
        <div>
          <h1>Fake Time</h1>
        </div>
        <div className='nav-links'>
          <Link
            style={{
              textDecoration: 'none',
              color: 'white',
              marginRight: '1rem',
            }}
            to='/products'>
            Shop
          </Link>
          <Link
            style={{
              textDecoration: 'none',
              color: 'white',
              marginRight: '1rem',
            }}
            to='/contact'>
            Contact
          </Link>
          <Link style={{color: 'white'}} to='/cart'>
            <CgShoppingCart />
          </Link>
        </div>
      </div>

      <div className='shop-button'>
        <Link to='/products'>
          <button id='shop-btn'>Shop Now</button>
        </Link>
      </div>
    </div>
  )
}

export default App
