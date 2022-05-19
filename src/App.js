import {Link, Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import background from './photos/gpu.jpg'
import {Header} from './components/Header'
import ProductsPage from './routes/ProductsPage'
import photo from './photos/rtx-3080.png'

function App() {
  const products = [
    {
      photo: {photo},
      title: 'RTX 3070',
      price: '$499',
    },
    {
      photo: '../photos/rtx-3080.png',
      title: 'RTX 3080',
      price: '$699',
    },
    {
      photo: './photos/rtx-3080.png',
      title: 'RTX 3090',
      price: '$999',
    },
  ]

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/products'
          element={<ProductsPage products={products} />}
        />
        <Route path='/contact' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
