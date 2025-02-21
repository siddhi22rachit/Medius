"use client";
// AboutPage.js
import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const AboutPage = () => {
  // Animation hooks
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (

    <div className="bg-white">

          <Navbar/>

      {/* Mission Section */}
      <section className="pb-20 pt-80 px-4 md:px-12 lg:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-green-600 text-xl mb-5">Our mission</h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-6">
            We&apos;re making homeownership simpler, faster — and most importantly, more accessible for all Americans.
          </h1>
        </motion.div>
      </section>

      {/* Status Quo Section */}
      <section className="py-16 px-4 md:px-12 lg:px-24 bg-white">

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="pr-0 md:pr-8"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">The status quo is broken</h2>
            <p className="text-gray-600 mb-6">
              The traditional processes around homeownership are opaque and stressful. Fees aren&apos;t transparent 
              and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and 
              slow, painful processes. It&apos;s a system set up to benefit insiders — not you. Better.com CEO Vishal 
              Garg set out to change that.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded transition duration-300">
              Read Vishal&apos;s story
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0  rounded-lg overflow-hidden">
              <img
src='https://media.better.com/video/vishal-mission.jpg'

              />
             
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We're Changing Things Section */}
      <section className="py-10 px-4 md:px-12 lg:px-24 bg-green-700 text-white">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={fadeInVariants}
            className="text-3xl md:text-4xl font-semibold mb-12"
          >
            How we&apos;re changing things
          </motion.h2>
          <motion.div variants={fadeInVariants}>
            <p className="text-lg mb-8">
              Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home 
              finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are 
              misaligned with consumers'.
            </p>
            <p className="text-lg mb-4">
              That&apos;s why Better.com is redefining the homeownership process from the ground up. We&apos;re using technology to make it faster and more 
              efficient, and humans to help make it friendly and enjoyable.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Backing Section */}
      <section className="py-20 px-4 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-center mb-16"
          >
            Backed by
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center items-center mb-24"
          >
            {/* Partner logos - use placeholder divs to represent them */}
            <div className="h-10 w-32  opacity-100">
              <img
              src='data:image/png;base64,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'
              />
            </div>
            <div className="h-8 w-24  opacity-100">
              <img 
            src='data:image/png;base64,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'
            />
            </div>
            <div className="h-8 w-24 bg-gray-200 opacity-70">
              <img
              
              src='data:image/png;base64,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'
              />
            </div>
            <div className="h-8 w-32 bg-gray-200 opacity-70">
              <img
              src='https://www.kleinerperkins.com/wp-content/uploads/2015/10/a2759c689ea9384fda38cd4e89190a1da78b7bd9-1500x750-1.jpg?w=600'
              />
            </div>
            
          </motion.div>

          {/* Timeline Section */}
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-16">Company timeline</h2>
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            
            {/* Timeline items */}
            <div className="space-y-24">
              {/* 2014 Item */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold z-10">
                    2014
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:col-start-1 md:col-end-2 bg-gray-200 p-6 rounded-lg">
                    <p className="text-gray-700">
                      After Vishal Garg&apos;s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.
                    </p>
                  </div>
                  <div className="md:col-start-2 md:col-end-3"></div>
                </div>
              </motion.div>

              {/* 2015 Item */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold z-10">
                    2015
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:col-start-1 md:col-end-2"></div>
                  <div className="md:col-start-2 md:col-end-3 bg-gray-200 p-6 rounded-lg">
                    <p className="text-gray-700">
                      Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 2016 Item */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold z-10">
                    2016
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:col-start-1 md:col-end-2 bg-gray-200 p-6 rounded-lg">
                    <p className="text-gray-700">
                      Better continues to grow its online mortgage platform, making homeownership more accessible.
                    </p>
                  </div>
                  <div className="md:col-start-2 md:col-end-3"></div>
                </div>
              </motion.div>

               {/* 2017 Item */}
               <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold z-10">
                    2017
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:col-start-1 md:col-end-2"></div>
                  <div className="md:col-start-2 md:col-end-3 bg-gray-200 p-6 rounded-lg">
                    <p className="text-gray-700">
                    Better expands into the real estate market with Better Real Estate.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 2018 Item */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold z-10">
                    2018
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:col-start-1 md:col-end-2 bg-gray-200 p-6 rounded-lg">
                    <p className="text-gray-700">
                    Better Mortgage partners with Ally Bank to build Ally powered by Better.                    </p>
                  </div>
                  <div className="md:col-start-2 md:col-end-3"></div>
                </div>
              </motion.div>

               {/* 2019 Item */}
               <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold z-10">
                    2019
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:col-start-1 md:col-end-2"></div>
                  <div className="md:col-start-2 md:col-end-3 bg-gray-200 p-6 rounded-lg">
                    <p className="text-gray-700">
                    Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.                    </p>
                  </div>
                </div>
              </motion.div>

                {/* 2021 Item */}
                <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold z-10">
                    2021
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:col-start-1 md:col-end-2 bg-gray-200 p-6 rounded-lg">
                    <p className="text-gray-700">
                    Better acquires Trussle — The UK’s most innovative online mortgage broker.

</p>
                  </div>
                  <div className="md:col-start-2 md:col-end-3"></div>
                </div>
              </motion.div>

               {/* 2022 Item */}
               <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold z-10">
                    2022
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:col-start-1 md:col-end-2"></div>
                  <div className="md:col-start-2 md:col-end-3 bg-gray-200 p-6 rounded-lg">
                    <p className="text-gray-700">
                    Better Mortgage becomes the first fintech to fund $100B home loans entirely online.

</p>
                  </div>
                </div>
              </motion.div>

              {/* 2023 Item */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold z-10">
                    2023
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:col-start-1 md:col-end-2 bg-gray-200 p-6 rounded-lg">
                    <p className="text-gray-700">
                    Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.

</p>
                  </div>
                  <div className="md:col-start-2 md:col-end-3"></div>
                </div>
              </motion.div>

               {/* 2023 Item */}
               <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
               
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:col-start-1 md:col-end-2"></div>
                  <div className="md:col-start-2 md:col-end-3 bg-gray-200 p-6 rounded-lg">
                    <p className="text-gray-700">
                    Better Mortgage launches the fully digital 3-day HELOC².

</p>
                  </div>
                </div>
              </motion.div>

                {/* 2023 Item */}
                <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
              
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:col-start-1 md:col-end-2 bg-gray-200 p-6 rounded-lg">
                    <p className="text-gray-700">
                    Better Mortgage launches One Day Verified Approval Letter.


</p>
                  </div>
                  <div className="md:col-start-2 md:col-end-3"></div>
                </div>
              </motion.div>

                {/* today Item */}
                <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold z-10">
                    Today
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:col-start-1 md:col-end-2"></div>
                  <div className="md:col-start-2 md:col-end-3 bg-gray-200 p-6 rounded-lg">
                    <p className="text-gray-700">
                    You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.


</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default AboutPage;