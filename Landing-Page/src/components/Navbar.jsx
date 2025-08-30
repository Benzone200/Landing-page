import React, { useState } from 'react';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['Home', 'Service', 'Feature', 'Product', 'Testimonial', 'FAQ'];

  return (
    <nav className="bg-[#f5f7fa] py-6 px-6 sm:px-10 md:px-16 lg:px-[100px] relative z-50">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto md:gap-6 md:flex-wrap">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <img
            src={Logo}
            alt="Logo"
            className="w-[35px] h-[25px] md:w-[40px] md:h-[30px] transition duration-300 ease-in-out"
          />
          <p className="text-[19px] md:text-[21px] font-bold text-gray-800 transition duration-300 ease-in-out">
            Nexcent
          </p>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-8 text-gray-700 font-medium">
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="hover:text-[#4CAF4F] transition duration-300 ease-in-out"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-6 cursor-pointer">
          <p className="text-green-500 hover:text-green-600 transition duration-300">Login</p>
          <p className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-300">
            Sign-up
          </p>
        </div>

        {/* Hamburger Icon - Tablet & Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none z-50 relative"
          >
            <svg
              className="w-6 h-6 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Animated Slide-In Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-sm bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden z-40`}
      >
        <div className="p-6 space-y-6 text-gray-700 font-medium">
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="block hover:text-[#4CAF4F] transition duration-300 ease-in-out"
            >
              {item}
            </a>
          ))}
          <div className="flex flex-col space-y-4 pt-4">
            <p className="text-green-500 hover:text-green-600 cursor-pointer">Login</p>
            <p className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg cursor-pointer">
              Sign-up
            </p>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;