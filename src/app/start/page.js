"use client";
// GreetingPage.js
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Footer from '../components/footer';

const GreetingPage = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <h1 className="text-green-700 font-semibold text-2xl">Better</h1>
          <span className="text-gray-600 ml-1">Mortgage</span>
        </div>
        <a href="tel:4155238837" className="flex items-center text-gray-700 hover:text-green-700 transition-colors">
          <div className="bg-green-50 rounded-full p-2 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <span className="text-sm">Need help? Call (415) 523 8837</span>
        </a>
      </header>

      {/* Divider with profile image */}
      <div className="relative mb-12">
        <div className="h-px w-full bg-gray-200"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="rounded-full overflow-hidden border-2 border-white bg-white shadow-sm h-16 w-16">
            <img 
              src="https://media.better.com/components/preapproval/industry-parity-v2/betty1.jpg" 
              alt="Betsy" 
              width={64} 
              height={64}
              className="rounded-full"
              layout="responsive"
            />
          </div>
        </div>
      </div>

      {/* Greeting */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2">Hi, I'm Betsy!</h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">What can I help you with?</h2>
      </motion.div>

      {/* Option Buttons */}
      <div className="max-w-lg mx-auto space-y-4 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button 
            className="w-full p-4 border border-gray-200 rounded-md flex items-center hover:border-green-500 hover:shadow-md transition-all duration-300"
            onMouseEnter={() => setHoveredButton('buying')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <motion.div 
              animate={{ 
                scale: hoveredButton === 'buying' ? 1.1 : 1,
                color: hoveredButton === 'buying' ? '#10B981' : '#047857'
              }}
              className="mr-4 text-green-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h2a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3" />
              </svg>
            </motion.div>
            <span className="text-lg text-gray-800">Buying a home</span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button 
            className="w-full p-4 border border-gray-200 rounded-md flex items-center hover:border-green-500 hover:shadow-md transition-all duration-300"
            onMouseEnter={() => setHoveredButton('refinance')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <motion.div 
              animate={{ 
                scale: hoveredButton === 'refinance' ? 1.1 : 1,
                color: hoveredButton === 'refinance' ? '#10B981' : '#047857'
              }}
              className="mr-4 text-green-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </motion.div>
            <span className="text-lg text-gray-800">Refinance my mortgage</span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button 
            className="w-full p-4 border border-gray-200 rounded-md flex items-center hover:border-green-500 hover:shadow-md transition-all duration-300"
            onMouseEnter={() => setHoveredButton('cash')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <motion.div 
              animate={{ 
                scale: hoveredButton === 'cash' ? 1.1 : 1,
                color: hoveredButton === 'cash' ? '#10B981' : '#047857'
              }}
              className="mr-4 text-green-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.div>
            <span className="text-lg text-gray-800">Get cash from my home</span>
          </button>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex flex-col md:flex-row justify-center gap-12 mb-16"
      >
        <div className="text-center">
          <motion.h3 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-4xl font-bold text-gray-800 mb-1"
          >
            $100B
          </motion.h3>
          <p className="text-sm text-gray-600">home loans funded entirely online</p>
        </div>
        <div className="text-center">
          <motion.h3 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-4xl font-bold text-gray-800 mb-1"
          >
            400K
          </motion.h3>
          <p className="text-sm text-gray-600">Customers who chose a Better Mortgage</p>
        </div>
      </motion.div>

      {/* Benefits Box */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="max-w-2xl mx-auto bg-green-50 rounded-lg p-6"
      >
        <p className="text-center text-gray-700 mb-5">After a few questions, you'll unlock:</p>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="bg-white rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-700">Custom mortgage rates</span>
          </div>
          <div className="flex items-center">
            <div className="bg-white rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-700">Exclusive offers</span>
          </div>
          <div className="flex items-center">
            <div className="bg-white rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-700">A personalized dashboard</span>
          </div>
        </div>
      </motion.div>
      <Footer/>
    </div>
  );
};

export default GreetingPage;