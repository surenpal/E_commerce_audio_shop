import { useEffect, useState } from 'react';
import React from 'react'
import { Link , NavLink} from 'react-router-dom';
import { MapPin } from 'lucide-react';
import {FaCaretDown} from 'react-icons/fa6';
import {IoCartOutline} from 'react-icons/io5';
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from '@clerk/clerk-react';


const Navbar = () => {

  const [location, setLocation] = useState("");


  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition( pos =>  {
      const {latitude, longitude} = pos.coords;
      console.log(latitude, longitude);
    })
  }
  
  useEffect(() => {
    getLocation();
  }, [])

  return (
    <div className='bg-white py-3 shadow-2xl -4'>
      <div className='max-w-6xl flex justify-between items-center'>
        <div className='flex gap-7 items-center'>
          <Link to={"/"}>
          <h1 className='font-bold text-3xl text-pink-600'>
            <span className='text-blue-500 font-serif'>B</span>
            a
            <span  className= "text-red-500 font-serif">s</span>
            s
            </h1></Link>

           <div className='flex gap-1 cursor-pointer text-gray-700 items-center'>
            <MapPin className='text-red-500'/>
            <span className="font-semibold">
              {location ? <div>{location}</div> : "Add Address"}
            </span>
            <FaCaretDown />
           </div>
        </div>


        <nav className='flex gap-7 items-center'>
          <ul className='flex gap-7 items-center text-xl font-semibold'>
            <NavLink to={"/"} className={({isActive}) => isActive ? 'border-b-4 border-red-500' : ''}>Home</NavLink>
            <NavLink to={"/products"} className={({isActive}) => isActive ? 'border-b-4 border-red-500' : ''}>Products</NavLink>
            <NavLink to={"/about"} className={({isActive}) => isActive ? 'border-b-4 border-red-500' : ''}>About</NavLink>
            <NavLink to={"/contact"} className={({isActive}) => isActive ? 'border-b-4 border-red-500' : ''}>Contact</NavLink>
          </ul>
          <Link to= {"/cart"}  className='relative'>
          <IoCartOutline className= 'h-7 w-7'/>
          <span className='bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white'>0</span></Link>
      
        <div>
          <SignedOut>
            <SignInButton className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        </nav>
      </div> 
    </div>   
  )
}

export default Navbar