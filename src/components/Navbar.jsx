import { useState } from "react";
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
    <div className="sticky top-0 z-50 bg-gradient-to-r from-[#5A2A55] via-pink-700 to-pink-500 py-4 shadow-xl">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">

        {/* Logo + Location */}
        <div className="flex gap-5 items-center relative">

          {/* Logo */}
          <Link to="/">
            <h1 className="font-serif text-3xl md:text-4xl font-extrabold text-white tracking-wide drop-shadow-md hover:text-pink-200 transition">
              MELA
            </h1>
          </Link>

          {/* Location pill */}
          <div
            className="hidden sm:flex gap-1.5 cursor-pointer items-center bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-3 py-1.5 transition"
            onClick={toggleDropdown}
          >
            <MapPin className="text-pink-200 w-4 h-4" />

            <div className="text-white text-xs font-medium leading-tight">
              {location ? (
                <div className="-space-y-0.5">
                  <p>{location.country}</p>
                  <p className="text-pink-200">{location.city}</p>
                </div>
              ) : (
                <span className="text-pink-100">Add Address</span>
              )}
            </div>

            <FaCaretDown className="text-pink-200 w-3 h-3" />
          </div>

          {/* Location Dropdown */}
          {openDropdown && (
            <div className="absolute top-14 left-0 w-[240px] bg-white shadow-xl rounded-2xl p-5 z-50 border border-pink-100">

              <div className="flex justify-between items-center mb-4">
                <h1 className="font-bold text-[#5A2A55]">Update Location</h1>
                <span onClick={toggleDropdown} className="cursor-pointer text-gray-400 hover:text-gray-600 transition">
                  <CgClose />
                </span>
              </div>

              <button
                onClick={getLocation}
                className="bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-full w-full font-semibold transition shadow"
              >
                Detect My Location
              </button>

            </div>
          )}

        </div>

        {/* Right side nav */}
        <nav className="flex gap-3 md:gap-5 items-center">

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-1 items-center text-sm font-medium text-white">
            {["Home", "Products", "About", "Contact"].map((link) => (
              <NavLink
                key={link}
                to={`/${link === "Home" ? "" : link.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive
                    ? "bg-white/20 text-white px-4 py-1.5 rounded-full border border-white/30"
                    : "text-pink-100 hover:bg-white/10 hover:text-white px-4 py-1.5 rounded-full transition"
                }
              >
                {link}
              </NavLink>
            ))}
          </ul>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative text-white hover:text-pink-200 transition p-1"
          >
            <IoCartOutline className="h-7 w-7" />

            {cartCount > 0 && (
              <span className="bg-white text-[#5A2A55] font-bold text-xs w-5 h-5 flex items-center justify-center rounded-full absolute -top-1 -right-1 shadow">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Sign In / User */}
          <div>
            <SignedOut>
              <SignInButton className="bg-white text-[#5A2A55] font-bold px-4 py-1.5 rounded-full cursor-pointer hover:bg-pink-50 transition text-sm shadow" />
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
            {openMenu ? <CgClose /> : <HiOutlineMenu />}
          </div>

        </nav>

      </div>

      {/* Mobile Menu panel */}
      {openMenu && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-pink-100 px-4 py-5 z-40">

          <ul className="flex flex-col gap-2">
            {[
              { label: "Home", to: "/" },
              { label: "Products", to: "/products" },
              { label: "About", to: "/about" },
              { label: "Contact", to: "/contact" },
            ].map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                onClick={() => setOpenMenu(false)}
                className={({ isActive }) =>
                  isActive
                    ? "bg-pink-400 text-white font-semibold py-3 px-4 rounded-xl text-center"
                    : "bg-pink-50 text-[#5A2A55] font-medium py-3 px-4 rounded-xl text-center hover:bg-pink-100 transition"
                }
              >
                {label}
              </NavLink>
            ))}
          </ul>

        </div>
      )}

    </div>
  );
};

export default Navbar;
