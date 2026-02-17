import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import { FaCaretDown } from 'react-icons/fa6'
import { IoCartOutline } from 'react-icons/io5'
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/clerk-react'
import { CgClose } from 'react-icons/cg'

const Navbar = ({ location, getLocation, openDropdown, setOpenDropdown }) => {

  const toggleDropdown = () => setOpenDropdown(!openDropdown)

  return (
    <div className="bg-white py-3 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        <div className="flex gap-7 items-center relative">

          <Link to={"/"}>
            <h1 className="font-bold text-3xl text-pink-600">
              <span className="text-blue-500 font-serif">G</span>
              l
              <span className="text-red-500 font-serif">o</span>
              w
            </h1>
          </Link>

          <div className="flex gap-1 cursor-pointer text-gray-700 items-center" onClick={toggleDropdown}>
            <MapPin className="text-red-500" />

            <div className="font-semibold">
              {location ? (
                <div className="-space-y-1 leading-tight">
                  <p>{location.country}</p>
                  <p>{location.city}</p>
                </div>
              ) : (
                "Add Address"
              )}
            </div>

            <FaCaretDown />
          </div>

          {openDropdown && (
            <div className="absolute top-14 left-0 w-[250px] bg-white shadow-xl border rounded-md p-5 z-50">
              <h1 className="font-semibold mb-4 text-lg flex justify-between">
                Update Location
                <span onClick={toggleDropdown} className="cursor-pointer">
                  <CgClose />
                </span>
              </h1>

              <button
                onClick={getLocation}
                className="bg-red-500 text-white px-3 py-1 rounded-md w-full"
              >
                Update Now
              </button>
            </div>
          )}
        </div>

        <nav className="flex gap-7 items-center">
          <ul className="hidden md:flex gap-7 items-center text-lg font-semibold">
            <NavLink to="/" className={({ isActive }) => isActive ? "border-b-4 border-red-500" : ""}>Home</NavLink>
            <NavLink to="/products" className={({ isActive }) => isActive ? "border-b-4 border-red-500" : ""}>Products</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "border-b-4 border-red-500" : ""}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "border-b-4 border-red-500" : ""}>Contact</NavLink>
          </ul>

          <Link to="/cart" className="relative">
            <IoCartOutline className="h-7 w-7" />
            <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white text-sm">0</span>
          </Link>

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