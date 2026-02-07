import React from 'react'
import { Link , NavLink} from 'react-router-dom';
import { MapPin } from 'lucide-react';
import {FaCaretDown} from 'react-icons/fa6';


const Navbar = () => {
  const location = false;; 
  return (
    <div className='bg-white py-3 shadow-2xl'>
      
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
       
        <div className='flex gap-7 items-center'>

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
            <NavLink to="/" className={({isActive}) => isActive ? 'border-b-4 border-red-500' : ''}>Home</NavLink>
            <NavLink to="/products" className={({isActive}) => isActive ? 'border-b-4 border-red-500' : ''}>Products</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? 'border-b-4 border-red-500' : ''}>About</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'border-b-4 border-red-500' : ''}>Contact</NavLink>
          </ul>
        </nav>

      </div> 
    </div>
  )
}

export default Navbar