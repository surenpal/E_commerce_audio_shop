import { useEffect, useState } from 'react';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';  
import axios from 'axios';

const App = () => {

  const [location, setLocation] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);



  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async pos =>  {
      const {latitude, longitude} = pos.coords;

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
      try {
        const location = await axios.get(url)
        const exactLocation = location.data.address
        setLocation(exactLocation);
        setOpenDropdown(false);
      }catch (error) {
        console.log("Error fetching location", error);
      }

    })
    
  }
   
  useEffect(() => {
    getLocation();
  }, [])


  return (
      <BrowserRouter>
      <Navbar location={location} getLocation={getLocation} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown}/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
           <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App