import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/clerk-react";
import { CgClose } from "react-icons/cg";
import { HiOutlineMenu } from "react-icons/hi";

const Navbar = ({
  location,
  getLocation,
  openDropdown,
  setOpenDropdown,
  cartCount
}) => {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleDropdown = () => setOpenDropdown(!openDropdown);
  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <div className="bg-gradient-to-r from-pink-400 via-pink-300 to-pink-600 py-3 shadow-lg backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">

        {/* Logo + Location */}
        <div className="flex gap-6 items-center relative">

          <Link to="/">
            <h1 className="font-serif text-3xl md:text-4xl font-extrabold text-white tracking-wide drop-shadow-sm">
              MELA
            </h1>
          </Link>

          <div
            className="flex gap-1 cursor-pointer text-white items-center hover:opacity-90 transition"
            onClick={toggleDropdown}
          >
            <MapPin className="text-pink-400" />

            <div className="font-medium text-sm md:text-base">
              {location ? (
                <div className="-space-y-1 leading-tight">
                  <p>{location.country}</p>
                  <p>{location.city}</p>
                </div>
              ) : (
                "Add Address"
              )}
            </div>

            <FaCaretDown className="text-pink-400" />
          </div>

          {/* Dropdown */}
          {openDropdown && (
            <div className="absolute top-12 left-0 w-[250px] bg-white/90 shadow-md rounded-lg p-4 z-50 backdrop-blur-sm">

              <h1 className="font-semibold mb-3 text-md flex justify-between text-gray-700">
                Update Location
                <span onClick={toggleDropdown} className="cursor-pointer">
                  <CgClose />
                </span>
              </h1>

              <button
                onClick={getLocation}
                className="bg-pink-400 text-white px-3 py-1 rounded-md w-full hover:bg-pink-500 transition"
              >
                Update Now
              </button>

            </div>
          )}

        </div>

        {/* Navigation */}
        <nav className="flex gap-5 md:gap-7 items-center">

          {/* Mobile Menu */}
          <div className="md:hidden text-white text-3xl cursor-pointer" onClick={toggleMenu}>
            {openMenu ? <CgClose /> : <HiOutlineMenu />}

            {openMenu && (
              <div className="md:hidden bg-white/90 p-4 mt-3 rounded-lg shadow-md backdrop-blur-sm">

                <h2 className="text-center text-gray-800 text-md font-semibold mb-3">
                  Menu
                </h2>

                <ul className="flex flex-col gap-2 text-center font-medium">

                  <NavLink
                    to="/"
                    onClick={() => setOpenMenu(false)}
                    className="bg-pink-100 py-3 rounded-lg text-gray-800 hover:bg-pink-200 transition"
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/products"
                    onClick={() => setOpenMenu(false)}
                    className="bg-pink-200 py-3 rounded-lg text-gray-800 hover:bg-pink-300 transition"
                  >
                    Products
                  </NavLink>

                  <NavLink
                    to="/about"
                    onClick={() => setOpenMenu(false)}
                    className="bg-pink-100 py-3 rounded-lg text-gray-800 hover:bg-pink-200 transition"
                  >
                    About
                  </NavLink>

                  <NavLink
                    to="/contact"
                    onClick={() => setOpenMenu(false)}
                    className="bg-pink-200 py-3 rounded-lg text-gray-800 hover:bg-pink-300 transition"
                  >
                    Contact
                  </NavLink>

                </ul>
              </div>
            )}
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-6 md:gap-7 items-center text-sm md:text-base font-medium text-white">
            {["Home", "Products", "About", "Contact"].map((link) => (
              <NavLink
                key={link}
                to={`/${link === "Home" ? "" : link.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-pink-400 pb-1"
                    : "hover:text-pink-300 transition"
                }
              >
                {link}
              </NavLink>
            ))}
          </ul>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative text-white hover:text-pink-300 transition"
          >

            <IoCartOutline className="h-6 w-6 md:h-7 md:w-7" />

            {cartCount > 0 && (
              <span className="bg-pink-400 px-2 rounded-full absolute -top-3 -right-3 text-white text-xs md:text-sm animate-bounce">
                {cartCount}
              </span>
            )}

          </Link>

          {/* User */}
          <div>
            <SignedOut>
              <SignInButton className="bg-pink-400 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-pink-500 transition text-sm md:text-base" />
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

        </nav>

      </div>
    </div>
  );
};

export default Navbar;