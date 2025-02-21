"use client";
// components/Navbar.js
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white text-gray-800 shadow-md py-2' : 'bg-green-800 text-white py-4'
    }`}>
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link href="/" className={`font-bold text-xl transition-colors duration-300 ${
              scrolled ? 'text-green-700' : 'text-white'
            }`}>
              Better
            </Link>
            
            <div className="hidden md:flex space-x-8">
              <Link href="/about-us" className={`hover:text-green-400 transition-colors duration-200 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}>About</Link>
              <Link href="/mortgage-calculator" className={`hover:text-green-400 transition-colors duration-200 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}>Calculator</Link>
              <Link href="/start" className={`hover:text-green-400 transition-colors duration-200 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}>Start</Link>
              {/* <Link href="/rates" className={`hover:text-green-400 transition-colors duration-200 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}>Rates</Link>
              <Link href="/better-plus" className={`hover:text-green-400 transition-colors duration-200 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}>Better+</Link> */}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className={`rounded-full border p-2 cursor-pointer transition-all duration-200 transform hover:scale-105 ${
              scrolled ? 'border-gray-300 text-gray-700 hover:bg-gray-100' : 'border-green-600 text-white hover:bg-green-700'
            }`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            
            <Link href="/signin" className={`transition-colors duration-200 ${
              scrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-300'
            }`}>Sign in</Link>
            
            <Link href="/get-started" className={`hidden md:block px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
              scrolled ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-white text-green-800 hover:bg-gray-100'
            }`}>
              Get started
            </Link>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white text-gray-800 rounded-lg shadow-xl">
            <div className="flex flex-col space-y-4 px-4">
              <Link href="/buy" className="text-gray-700 hover:text-green-600 py-2">About</Link>
              <Link href="/refinance" className="text-gray-700 hover:text-green-600 py-2">Calculator</Link>
              <Link href="/heloc" className="text-gray-700 hover:text-green-600 py-2">Start</Link>
              <Link href="/better-plus" className="text-gray-700 hover:text-green-600 py-2">Better+</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;