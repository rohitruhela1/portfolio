import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import namelogo from './images/namelogo.jpg';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="relative flex items-center justify-between h-16 px-2 sm:px-6 lg:px-8 text-white">
      <div className="flex flex-1 items-center justify-between">
        {/* Mobile menu button */}
        <div className="flex items-center sm:hidden relative z-50">
          <button
            type="button"
            className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {/* Menu open icon */}
            <svg
              className={`${!isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            {/* Menu close icon */}
            <svg
              className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Logo and navigation links */}
        <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            {/* Logo image */}
            <img className="h-8 w-auto" src={namelogo} alt="Logo" />
          </div>
          <div className="hidden sm:flex sm:ml-6 sm:space-x-5">
            <Link
              to="/"
              className={`rounded-md px-3 py-2 text-sm font-medium ${isActive('/') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
              aria-current="page"
            >
              Home
            </Link>
            <Link
              to="/skills"
              className={`rounded-md px-3 py-2 text-sm font-medium ${isActive('/skills') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
            >
              Skills
            </Link>
            <Link
              to="/projects"
              className={`rounded-md px-3 py-2 text-sm font-medium ${isActive('/projects') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`rounded-md px-3 py-2 text-sm font-medium ${isActive('/contact') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} sm:hidden`} id="mobile-menu">
        <div className="absolute inset-0 bg-black opacity-50" onClick={() => setMobileMenuOpen(false)}></div>
        <div className="absolute top-0 inset-x-0 p-4 bg-gray-800 text-white">
          <div className="space-y-1">
            <Link
              to="/"
              className={`block rounded-md px-10 py-2 text-base font-medium ${isActive('/') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
              aria-current="page"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`block rounded-md px-10 py-2 text-base font-medium ${isActive('/projects') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
            >
              Work
            </Link>
            <Link
              to="/skills"
              className={`block rounded-md px-10 py-2 text-base font-medium ${isActive('/skills') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
            >
              Skills
            </Link>
            <Link
              to="/contact"
              className={`block rounded-md px-10 py-2 text-base font-medium ${isActive('/contact') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
