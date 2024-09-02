import Navbar from './components/Navbar'
import Home from './pages/Home'
import Collections from './pages/Collections'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Product from './pages/Product'
import PlaceOrder from './pages/PlaceOrder'
import Footer from './components/Footer'
import Orders from './pages/Orders'
import {Routes,Route} from 'react-router-dom'

function App() {

  return (
    <div className='h-screen w-full bg-black p-2'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collections' element={<Collections/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/placeorder' element={<PlaceOrder/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
