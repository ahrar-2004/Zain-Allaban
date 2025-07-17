import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/logo.png" alt="Zaain Allaban Logo" className="h-12 w-auto mr-3" />
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex space-x-8 items-center">
              <Link to="/" className="text-gray-700 hover:text-[#0028F5] font-medium text-sm">Home</Link>
              <Link to="/services" className="text-gray-700 hover:text-[#0028F5] font-medium text-sm">Services</Link>
              <Link to="/menu" className="text-gray-700 hover:text-[#0028F5] font-medium text-sm">Menu</Link>
              <Link to="/about" className="text-gray-700 hover:text-[#0028F5] font-medium text-sm">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-[#0028F5] font-medium text-sm">Contact</Link>
            </div>

            {/* Contact Info Desktop */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="tel:+971561837606" className="flex items-center text-sm text-gray-600 hover:text-[#0028F5]">
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-medium">+971 00 000 0000</span>
              </a>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-[#0028F5] transition-colors duration-300">
                {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-6 py-6 space-y-4">
              <Link to="/" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-[#0028F5] font-medium">Home</Link>
              <Link to="/services" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-[#0028F5] font-medium">Services</Link>
              <Link to="/menu" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-[#0028F5] font-medium">Menu</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-[#0028F5] font-medium">About</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-[#0028F5] font-medium">Contact</Link>

              {/* Contact Info */}
              <div className="border-t border-gray-100 pt-6 space-y-4">
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-3 text-[#0028F5]" />
                  <span className="font-medium">+971 00 000 0000</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-3 text-[#0028F5]" />
                  <span className="font-medium">icecream@zaainallaban.com</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-3 text-[#0028F5]" />
                  <span className="font-medium">Dubai, UAE</span>
                </div>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center mt-6 px-6 py-3 bg-[#0028F5] text-white rounded-full hover:bg-blue-700 transition-all duration-300 font-medium"
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
