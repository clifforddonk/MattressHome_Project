import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoClose, IoSearch } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#f40000] z-50 ">
      <div className="container mx-auto w-full">
        <div className="flex flex-wrap items-center justify-between w-full pt-4">
          {/* Toggle Icon for Mobile */}
          <div className="md:hidden text-white px-2" onClick={toggleSidebar}>
            {isOpen ? (
              <IoClose className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </div>

          {/* Logo */}
          <div className="px-2 flex jusfify-evenly">
            <img
              className="w-15 h-9 "
              src="images/mattress-logo.png"
              alt="Logo"
            />

            <h1 className="text-2xl font-bold text-white py-1 px-1">
              The Sleep Sanctuary.
            </h1>
          </div>

          {/* Search Input */}
          <div className="relative w-80 order-1 sm:order-none mx-auto mb-5 sm:mb-0 pt-2 rounded-lg">
            <input
              type="text"
              className="w-80 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search..."
            />
            <IoSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-400" />
          </div>

          {/* Phone Icon */}
          <div className="px-3 pr-6 md:px-28 md:mr-6">
            <FiPhoneCall className="text-white text-2xl" />
          </div>
        </div>
      </div>

      {/* Desktop Navbar Links */}
      <div className="hidden md:block">
        <div className="flex justify-center mt-3 pb-1 space-x-6">
          <Link className="link text-white" to="/">
            Home
          </Link>
          <Link className="link text-white" to="/shop">
            Shop
          </Link>
          <Link className="link text-white" to="/services">
            Services
          </Link>
          <Link className="link text-white" to="/about">
            About
          </Link>
          <Link className="link text-white" to="/contacts">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="md:hidden bg-[#F40000] p-4">
          <div className="flex flex-col space-y-2">
            <Link className="link text-white" to="/">
              Home
            </Link>
            <Link className="link text-white" to="/shop">
              Shop
            </Link>
            <Link className="link text-white" to="/services">
              Services
            </Link>
            <Link className="link text-white" to="/about">
              About
            </Link>
            <Link className="link text-white" to="/contacts">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
