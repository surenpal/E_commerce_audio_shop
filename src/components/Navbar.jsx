import React from 'react'
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='bg-white py-3 shadow-2xl'>
      
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        <div className='text-2xl font-bold'>
          {/* Logo or Brand Name */}
          <Link to="/" className='font-bold text-3xl'><span className='text-blue-500 font-serif'>B</span>a<span  className= "text-red-500 font-serif">s</span>s</Link>
           <div className='flex gap-1 cursor-pointer text-gray-700 items-center'>
            <MapPin className='text-red-500'/>
            <span className='font-semibold'>{Location}</span>
           </div>
        </div>
      </div> 
    </div>
  )
}

export default Navbar