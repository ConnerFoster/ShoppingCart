import {Routes, Route} from 'react-router-dom'
import {useState} from 'react'
import Home from './routes/Home'
import ProductsPage from './routes/ProductsPage'
import Contact from './routes/Contact'
import {RTX3080, RTX3070, RTX3090, MB1, MB2, MB3} from './photos/photos'
import Cart from './components/Cart'

function App() {
  const products = [
    {
      image: RTX3070,
      title: 'Nvidia GeForce RTX 3070',
      price: '$499',
      id: 0,
    },
    {
      image: RTX3080,
      title: 'Nvidia GeForce RTX 3080',
      price: '$699',
      id: 1,
    },
    {
      image: RTX3090,
      title: 'Nvidia GeForce RTX 3090',
      price: '$999',
      id: 2,
    },
    {
      image: MB1,
      title: 'Asus ROG Strix B450-F Gaming',
      price: '$199',
      id: 3,
    },
    {
      image: MB2,
      title: 'Asus TUF Gaming X570-Plus',
      price: '$179',
      id: 4,
    },
    {
      image: MB3,
      title: 'MSI B450 Tomahawk MAX',
      price: '$169',
      id: 5,
    },
  ]

  const [cartState, setCart] = useState({
    cart: [],
  })

  const updateCart = (obj) => {
    setCart((prevState) => {
      let cart = Object.assign([], prevState.cart)
      let flag = false
      cart.forEach((element) => {
        if (element.id === obj.id) {
          const cartObj = cart.find((x) => x.id === element.id)
          console.log('true')
          cartObj.count++
          flag = true
        }
      })
      if (flag === false) {
        const newObj = {}
        newObj.id = obj.id
        newObj.image = obj.image
        newObj.title = obj.title
        newObj.price = obj.price
        newObj.count = 1
        cart.push(newObj)
      }
      console.log(cart)
      return {cart}
    })
  }

  const showCart = () => {
    const cart = document.getElementById('cart-page')
    cart.style.visibility = 'visible'
  }

  const incrementCart = (id) => {
    setCart((prevState) => {
      let cart = Object.assign([], prevState.cart)
      const cartObj = cart.find((x) => x.id === id)
      cartObj.count += 1
      return {cart}
    })
  }

  const decrementCart = (id) => {
    setCart((prevState) => {
      let cart = Object.assign([], prevState.cart)
      const cartObj = cart.find((x) => x.id === id)
      const cartObjIndex = cart.findIndex((x) => x.id === id)
      console.log(cartObjIndex)

      if (cartObj.count > 1) {
        cartObj.count -= 1
      } else if (cartObj.count === 1) {
        cart.splice(cartObjIndex, 1)
      }

      return {cart}
    })
  }

  return (
    <div>
      <Cart
        state={cartState.cart}
        incrementCart={incrementCart}
        decrementCart={decrementCart}
      />
      <Routes>
        <Route path='/' element={<Home showCart={showCart} />} />
        <Route
          path='/products'
          element={
            <ProductsPage
              updateCart={updateCart}
              products={products}
              showCart={showCart}
            />
          }
        />
        <Route path='/contact' element={<Contact showCart={showCart} />} />
      </Routes>
    </div>
  )
}

export default App
