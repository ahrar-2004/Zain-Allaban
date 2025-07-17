import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md border-b border-gray-200' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-xl font-bold text-white bg-[#113F67] px-3 py-1 rounded-md">
              ZAIN ALLABAN
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-[#113F67] hover:text-[#34699A] transition"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Contact + CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:+971500000000"
                className="flex items-center text-sm text-[#113F67] hover:text-[#34699A]"
              >
                <Phone className="w-4 h-4 mr-1" />
                +971 50 000 0000
              </a>
              <a
                href="/contact"
                className="px-4 py-2 bg-[#34699A] hover:bg-[#113F67] text-white text-sm rounded transition"
              >
                Order Now
              </a>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#113F67] hover:text-[#34699A]"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-sm">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-[#113F67] hover:text-[#34699A]"
                >
                  {item.name}
                </a>
              ))}

              {/* Contact Section in Mobile Menu */}
              <div className="border-t pt-4 text-sm space-y-3 text-[#113F67]">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-[#34699A]" />
                  +971 50 000 0000
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-[#34699A]" />
                  icecream@zainallaban.com
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-[#34699A]" />
                  <a
                    href="https://maps.app.goo.gl/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Dubai, UAE
                  </a>
                </div>
                <a
                  href="/contact"
                  className="block w-full text-center mt-3 px-4 py-2 bg-[#34699A] text-white rounded hover:bg-[#113F67] transition"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to offset navbar height */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
