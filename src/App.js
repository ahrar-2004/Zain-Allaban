import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Facebook } from 'lucide-react';

import Navbar from './com/Navbar';
import Home from './com/Home';
import About from './com/About';
import Contact from './com/Contact';
import Services from './com/Services';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#FDF5AA] text-[#113F67] relative">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-[#113F67] text-white">
  <div className="max-w-6xl mx-auto px-4 py-12">
    <div className="text-center space-y-4">
      <h3 className="text-2xl font-bold">ZAIN ALLABAN</h3>
      <p className="text-sm max-w-md mx-auto">
        Premium handcrafted ice cream made with love and quality ingredients.
      </p>
      <a
        href="https://www.facebook.com/share/1CTJhMUS5u/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 hover:text-[#FDF5AA] transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.5-3.89 3.8-3.89 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.77l-.44 2.9h-2.33v7.03C18.34 21.25 22 17.09 22 12.07z" />
        </svg>
        Follow us on Facebook
      </a>
      <p className="text-xs mt-4">
        © {new Date().getFullYear()} ZAIN ALLABAN. All rights reserved. Developed by{' '}
        <a
          href="https://hidmsolutions.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#FDF5AA]"
        >
          HIDM Solutions
        </a>
      </p>
    </div>
  </div>
</footer>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/971561837606"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-50"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-14 h-14 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full shadow-lg hover:scale-110 transition-transform"
          />
        </a>
      </div>
    </Router>
  );
};

export default App;
