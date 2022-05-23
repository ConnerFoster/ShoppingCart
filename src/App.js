import {Routes, Route} from 'react-router-dom'
import {useState} from 'react'
import Home from './routes/Home'
import ProductsPage from './routes/ProductsPage'
import Contact from './routes/Contact'
import photo from './photos/rtx-3080.png'
import Cart from './components/Cart'

function App() {
  const products = [
    {
      image: photo,
      title: 'Nvidia GeForce RTX 3070',
      price: '$499',
      id: 0,
    },
    {
      image: photo,
      title: 'Nvidia GeForce RTX 3080',
      price: '$699',
      id: 1,
    },
    {
      image: photo,
      title: 'Nvidia GeForce RTX 3090',
      price: '$999',
      id: 2,
    },
  ]

  const [cartState, setCart] = useState({
    cart: [
      {
        image: photo,
        title: 'Nvidia GeForce RTX 3070',
        price: '$499',
        id: 0,
      },
    ],
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

  return (
    <div>
      <Cart state={cartState.cart} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/products'
          element={<ProductsPage updateCart={updateCart} products={products} />}
        />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
