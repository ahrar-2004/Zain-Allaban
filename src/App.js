import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './com/Navbar';
import Home from './com/Home';
import About from './com/About';
import Contact from './com/Contact';
import Services from './com/Services';
import Menu from './com/Menu';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-gray-800 relative">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
             <Route path="/menu" element={<Menu />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-[#0028F5] text-white">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Zaain Allaban Logo" 
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-blue-100 max-w-md mx-auto leading-relaxed">
                Premium handcrafted ice cream made with love and quality ingredients.
              </p>
              
              {/* Social Media */}
              <div className="pt-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 text-blue-100 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.5-3.89 3.8-3.89 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.77l-.44 2.9h-2.33v7.03C18.34 21.25 22 17.09 22 12.07z" />
                    </svg>
                  </div>
                  <span className="font-light">Follow us on Facebook</span>
                </a>
              </div>

              {/* Divider */}
              <div className="border-t border-blue-400 pt-6 mt-8">
                <p className="text-blue-200 text-sm font-light">
                  © {new Date().getFullYear()} ZAAIN ALLABAN. All rights reserved.
                </p>
                <p className="text-blue-300 text-xs mt-2">
                  Developed by{' '}
                  <a
                    href="#"
                    className="text-blue-100 hover:text-white transition-colors underline decoration-blue-300"
                  >
                    HIDM Solutions
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>

        {/* WhatsApp Floating Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="tel:0000000000"
            className="group relative"
          >
            <div className="w-14 h-14 bg-[#0028F5] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.488" />
              </svg>
            </div>
            
            {/* Tooltip */}
            <div className="absolute right-16 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
                Contact Us
                <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-y-4 border-y-transparent"></div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </Router>
  );
};

export default App;