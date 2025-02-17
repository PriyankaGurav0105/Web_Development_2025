import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown,ArrowUpRight } from "lucide-react";
import logo from '../assets/logo.png'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/"><img src={logo} width={85} height={35}/></Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-gray-900 font-bold hover:text-gray-600">
            Home
          </Link>
          <Link to="/about" className="text-gray-900 font-bold hover:text-gray-600">
            About Us
          </Link>

          {/* Property Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center text-gray-900 font-bold hover:text-gray-600"
            >
              Property <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {dropdownOpen && (
              <div className="absolute top-10 left-0 w-40 bg-white shadow-lg rounded-lg py-2">
                <Link
                  to="/property/residential"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Residential
                </Link>
                <Link
                  to="/property/commercial"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Commercial
                </Link>
              </div>
            )}
          </div>

          <Link to="/blogs" className="text-gray-900 font-bold hover:text-gray-600"
          >
            Blogs
          </Link>
        </div>

        {/* Let's Talk Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="flex items-center px-5 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-700"
          >
            Let's Talk<ArrowUpRight className="w-5 h-5 ml-1" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white  px-6 pb-4">
          <Link
            to="/"
            className="block py-2 text-gray-900 font-bold hover:text-gray-600"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 text-gray-900 font-bold hover:text-gray-600"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>

          {/* Property Dropdown (Mobile) */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center py-2 text-gray-900 font-bold hover:text-gray-600"
            >
              Property <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {dropdownOpen && (
              <div className="pl-4">
                <Link
                  to="/property/residential"
                  className="block py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  Residential
                </Link>
                <Link
                  to="/property/commercial"
                  className="block py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  Commercial
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/blogs"
            className="block py-2 text-gray-900 font-bold hover:text-gray-600"
            onClick={() => setMenuOpen(false)}
          >
            Blogs
          </Link>

          {/* Let's Talk Button (Mobile) */}
          <Link
            to="/contact"
            className=" block items-center mt-2 px-5 py-2 bg-black text-white rounded-lg text-center shadow-md hover:bg-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            Let's Talk
          </Link>
        </div>
      )}
    </nav>
  );
}
