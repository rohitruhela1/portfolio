import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import namelogo from './images/namelogo.jpg';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu state

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects','profiles','skills', 'contact'];
      let currentSection = 'home';

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      const offset = 80; // Adjust based on navbar height
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
  
      setIsMenuOpen(false); // Close menu after clicking
    }
  };
  

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50 mb-10">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img className="h-8 w-auto" src={namelogo} alt="Logo" />
        </div>

        {/* Hamburger Menu (Visible on Small Screens) */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰ {/* Hamburger Icon */}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex space-x-6">
          {['home', 'projects','profiles','skills', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-sm font-bold px-4 py-2 rounded-md ${
                activeSection === section ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu (Visible when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col  text-white">
          {['home', 'projects','profiles', 'skills', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="py-2 text-center border-b border-gray-700"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
