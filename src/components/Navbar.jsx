import React, { use } from 'react'
import { Link , NavLink} from 'react-router-dom';
import { MapPin } from 'lucide-react';
import {FaCaretDown} from 'react-icons/fa6';
import {IoCartOutline} from 'react-icons/io5';
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from '@clerk/clerk-react';
import { useState } from 'react';
import { CgClose } from 'react-icons/cg';



const Navbar = ({location, getLocation, openDropdown, setOpenDropdown}) => {
  
  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  }


  return (
    <div className='bg-white py-3 shadow-2xl -4'>
      <div className='max-w-6xl flex justify-between items-center'>
        <div className='flex gap-7 items-center'>
          <Link to={"/"}>
          <h1 className='font-bold text-3xl text-pink-600'>
            <span className='text-blue-500 font-serif'>E</span>
            l
            <span  className= "text-red-500 font-serif">e</span>
            x
            </h1></Link>

           <div className='flex gap-1 cursor-pointer text-gray-700 items-center'>
            <MapPin className='text-red-500'/>
            <span className="font-semibold">{location ?  <div className='-space-y-2'>
                <p>{location.country}</p>
                <p>{location.city}</p>
                </div> : "Add Address"}
            </span>
            <FaCaretDown  onClick={toggleDropdown}/>
           </div>

           {
            openDropdown ? <div className='w-[250px] h-max shadow-2xl z-50 bg-white fixed top-16 left-60 border-2 
            p-5 border-gray-100 rounded-md'> <h1 className='font-semibold mb-4 text-xl flex justify-between'>Want to Update location <span onClick={toggleDropdown}><CgClose/></span></h1>
            <button onClick={getLocation} className='bg-red-500 text-white px-3 py-1 rounded-md'>Update Now</button>
            </div> : null
           }

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