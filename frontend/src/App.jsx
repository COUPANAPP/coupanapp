import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Restaurant from './pages/RestaurantPage/Restaurant'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'


const App = () => {

  const [showLogin,setShowLogin] = useState(false)
  return (

    // adding fragment
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        
        <Navbar setShowLogin={setShowLogin}/>  
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/restaurants" element={<Restaurant />} />
          <Route path='/Cart' element={<Cart/>} />
          <Route path='/order' element={<PlaceOrder/>} />
        </Routes>          
      </div>
      <Footer/>    
    </>    
  )
}

export default App