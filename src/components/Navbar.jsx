import React from 'react'
import { Link , NavLink} from 'react-router-dom';
  import { MapPin } from 'lucide-react';
  import {FaCaretDown} from 'react-icons/fa6';


const Navbar = () => {
  const location = false;; 
  return (
    <div className='bg-white py-3 shadow-2xl'>
      
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        <div className='flex items-center gap-8'>

          <Link to="/" className='font-bold text-3xl'><span className='text-blue-500 font-serif'>B</span>a<span  className= "text-red-500 font-serif">s</span>s</Link>
           <div className='flex gap-1 cursor-pointer text-gray-700 items-center'>
            <MapPin className='text-red-500'/>
            <span className="font-semibold">
              {location ? <div>{location}</div> : "Add Address"}
            </span>
            <FaCaretDown />
           </div>
        </div>


        <nav>
          <ul className='flex gap-7 text-xl font-semibold'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </ul>
        </nav>




      </div> 
    </div>
  )
}

export default Navbar