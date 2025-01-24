import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { About, Cart, Collections, Contact, Home, Login, Orders, PlaceOrder, Product } from './pages';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import { SearchBar } from './components/SearchBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
        <Navbar/>
        <SearchBar/>
        <Routes>
          <Route path='/about' element={<About/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/collections' element={<Collections/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/orders' element={<Orders/>} />
          <Route path='/place-order' element={<PlaceOrder/>} />
          <Route path='/product/:id' element={<Product/>} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default App