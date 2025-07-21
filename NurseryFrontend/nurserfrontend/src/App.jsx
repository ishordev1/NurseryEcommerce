import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Navbar from './pages/Navbar/Navbar'
import Footer from './pages/Footer/Footer'
import Home from './pages/Home/HomePage'
import ProductPage from './pages/ProductPage/ProductPage'
import ShopPage from './pages/ShopPage'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/products" element={<ShopPage />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
