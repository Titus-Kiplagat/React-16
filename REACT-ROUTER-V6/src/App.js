import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

function App() {
  let activeStyle = {
    textDecoration: 'underline',
    color: 'red',
  }
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <NavLink style={({isActive}) => isActive ? activeStyle : undefined} to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink
            className={({isActive}) => isActive ? "activeClassname" : undefined}
            to="/products"
          >
            Products
          </NavLink>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about/*" element={<About />}/>
          <Route path="/products/:id/*" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path='/redirect' element={<Navigate to='/about' />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App