import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>


      <BrowserRouter>

      <Navbar />
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/cart" element={<div>Cart Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App