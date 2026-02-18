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
    <div className="bg-gradient-to-r from-[#E8B4B8] via-[#5A2A55] to-[#D4AF37] py-4 shadow-xl">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">

        <div className="flex gap-7 items-center relative">
          <Link to="/">
            <h1 className="font-serif text-4xl font-bold text-white tracking-wide drop-shadow-lg">
              Glow
            </h1>
          </Link>

          <div
            className="flex gap-1 cursor-pointer text-white items-center hover:opacity-90 transition"
            onClick={toggleDropdown}
          >
            <MapPin className="text-[#D4AF37]" />

            <div className="font-medium">
              {location ? (
                <div className="-space-y-1 leading-tight">
                  <p>{location.country}</p>
                  <p>{location.city}</p>
                </div>
              ) : (
                "Add Address"
              )}
            </div>

            <FaCaretDown className="text-[#D4AF37]" />
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
                className="bg-[#5A2A55] text-white px-3 py-1 rounded-md w-full hover:bg-[#4a2147] transition"
              >
                Update Now
              </button>
            </div>
          )}
        </div>

        <nav className="flex gap-7 items-center">
          <ul className="hidden md:flex gap-7 items-center text-lg font-semibold text-white">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border-b-4 border-[#D4AF37] pb-1"
                  : "hover:text-[#D4AF37] transition"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "border-b-4 border-[#D4AF37] pb-1"
                  : "hover:text-[#D4AF37] transition"
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "border-b-4 border-[#D4AF37] pb-1"
                  : "hover:text-[#D4AF37] transition"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "border-b-4 border-[#D4AF37] pb-1"
                  : "hover:text-[#D4AF37] transition"
              }
            >
              Contact
            </NavLink>
          </ul>

          <Link to="/cart" className="relative text-white hover:text-[#D4AF37] transition">
            <IoCartOutline className="h-7 w-7" />
            <span className="bg-[#D4AF37] px-2 rounded-full absolute -top-3 -right-3 text-white text-sm">
              0
            </span>
          </Link>

          <div>
            <SignedOut>
              <SignInButton className="bg-[#5A2A55] text-white px-3 py-1 rounded-md cursor-pointer hover:bg-[#4a2147] transition" />
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