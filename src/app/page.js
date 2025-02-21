"use client";
// pages/index.js
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    {
      id: 0,
      name: "Arian",
      image:
        "https://media.better.com/better-com/homepage/social-proof/still-quote-Arian.webp", // Replace with actual image URL
    },
    {
      id: 1,
      name: "Amanda",
      image:
        "https://media.better.com/better-com/homepage/social-proof/still-quote-Amanda.webp", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Paul",
      image:
        "https://media.better.com/better-com/homepage/social-proof/still-quote-Paul.webp", // Replace with actual image URL
    },
  ];

  // Animation refs
  const heroRef = useRef(null);
  const testimonialsRef = useRef(null);
  const faqRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);
    if (faqRef.current) observer.observe(faqRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (testimonialsRef.current) observer.unobserve(testimonialsRef.current);
      if (faqRef.current) observer.unobserve(faqRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Better Mortgage - Mortgages Made Simple</title>
        <meta
          name="description"
          content="Better Mortgage - Fast approvals, low rates, no fees"
        />
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .opacity-0 {
            opacity: 0;
          }
        `}</style>
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-700 text-white pt-80 pb-20 px-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-600 rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-600 rounded-full opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

        <div
          ref={heroRef}
          className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-between relative z-10 opacity-100"
        >
          <div className="mb-12 lg:mb-0 text-center lg:text-left lg:w-1/2">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Mortgages
              <br />
              made simple
            </h1>
            <div className="max-w-md mx-auto lg:mx-0">
              <button className="bg-green-400 text-white font-medium py-4 px-8 rounded-full text-lg w-full hover:bg-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-300">
                Start my approval
              </button>
              <div className="flex items-center justify-center lg:justify-start mt-4 text-sm">
                <span>3 min</span>
                <span className="mx-2">|</span>
                <span>No credit impact</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative max-w-sm mx-auto transform hover:scale-105 transition-transform duration-500 hover:rotate-1">
              {/* Phone image with glowing effect */}
              <div className="absolute inset-0 bg-green-400 rounded-3xl blur-lg opacity-30 animate-pulse"></div>
              <div className="relative bg-black rounded-3xl p-6 shadow-xl">
                <div className="rounded-2xl overflow-hidden">
                  <div className="bg-gray-900 text-white p-4">
                    <p className="text-green-400 font-medium">Congrats,</p>
                    <p>You're pre-approved</p>
                    <p>for a loan up to</p>
                    <p className="text-3xl font-bold text-green-400 my-2">
                      $450,000
                    </p>
                    <button className="mt-4 bg-green-700 text-white text-xs py-2 px-4 rounded-full">
                      Go to pre-approval letter
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-xl max-w-xs transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center">
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 w-16 h-16 rounded-md mr-4 flex items-center justify-center">
                  <span className="text-green-700 text-xs font-bold">
                    BETTER
                  </span>
                </div>
                <div>
                  <h3 className="font-bold">Better Forever</h3>
                  <p className="text-sm text-gray-800">
                    Save on future home loans with $0 origination fees.
                  </p>
                  <Link
                    href="/details"
                    className="text-sm text-gray-800 flex items-center group"
                  >
                    See details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial section */}
      <section
        ref={testimonialsRef}
        className="py-20 px-4 bg-gray-50 opacity-100"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex flex-col items-center">
              {/* Testimonial Box */}
              <div className="relative rounded-lg overflow-hidden h-[800px] w-[400px] mx-auto transform transition-all duration-500 hover:shadow-xl flex flex-col items-center justify-center">
                {/* Testimonial Image */}
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                />
              </div>

              {/* Testimonial Buttons */}
              <div className="flex mt-8 justify-center">
                {testimonials.map((testimonial) => (
                  <button
                    key={testimonial.id}
                    onClick={() => setActiveTestimonial(testimonial.id)}
                    className={`px-6 py-2 rounded-full mr-4 transition-all duration-300 ${
                      activeTestimonial === testimonial.id
                        ? "bg-green-700 text-white font-medium shadow-md"
                        : "bg-white text-gray-700 border hover:border-green-600"
                    }`}
                  >
                    {testimonial.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 lg:pl-16 text-center lg:text-left">
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-gray-800">
                Find out why we're better.
              </h2>
              <button className="bg-green-800 text-white px-6 py-3 rounded-full mb-6 transition-all duration-300 transform hover:scale-105 hover:bg-green-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-700">
                See all our stories
              </button>
              <div className="flex items-center justify-center lg:justify-start">
                <span className="ml-2 text-gray-800">
                  <span className="font-medium">Excellent</span> 4.4 out of 5
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20 px-4 opacity-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            Got questions?
          </h2>
          <p className="text-2xl mb-10 text-gray-800">We've got answers</p>

          <div className="flex flex-wrap mb-8 gap-3">
            <button className="bg-green-100 text-green-800 px-6 py-3 rounded-full border-2 border-green-700 transition-all duration-300 hover:bg-green-200">
              Our products
            </button>
            <button className="bg-white text-gray-700 px-6 py-3 rounded-full border transition-all duration-300 hover:border-green-600 hover:text-green-700">
              Calculators
            </button>
            <button className="bg-white text-gray-700 px-6 py-3 rounded-full border transition-all duration-300 hover:border-green-600 hover:text-green-700">
              Guides & FAQs
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-50 p-8 rounded-lg transition-all duration-300 transform hover:shadow-xl hover:scale-105 group">
              <h3 className="text-xl font-bold mb-6 text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                Buying your first home with Better
              </h3>
              <div className="mb-6 overflow-hidden rounded-md">
                <div className="relative h-48 w-full transform transition-transform duration-700 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gray-300">
                  <img
                        src="https://media.better.com/better-com/homepage/learning-center/first-home.webp"
                        alt="Insurance Icon"
  className="w-full h-full object-cover"
                      />
                  </div>
                </div>
              </div>
              <Link
                href="/first-home"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 transition-all duration-300 hover:bg-green-700 hover:border-green-700 hover:text-white group-hover:bg-green-700 group-hover:border-green-700 group-hover:text-white"
              >
                <svg
                  xmlns="https://media.better.com/better-com/homepage/learning-center/first-home.webp"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 p-8 rounded-lg transition-all duration-300 transform hover:shadow-xl hover:scale-105 group">
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <div className="mb-4 md:mb-0 md:mr-4">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                    One Day Mortgage¹
                  </h3>
                  <p className="text-sm text-gray-600 max-w-xs">
                    Kick your home loan into hyperdrive. Going from locked rate
                    to Commitment Letter takes weeks for traditional lenders. We
                    do it in a single day. Traditional lenders deliver a
                    Commitment Letter in a few weeks.²
                  </p>
                </div>
                <div className="bg-green-100 p-4 rounded-lg flex items-center justify-center transform transition-all duration-500 group-hover:rotate-3 group-hover:bg-green-200 h-32 w-32 flex-shrink-0">
                  <span className="text-green-800 font-bold text-center">
                    One Day Mortgage™
                  </span>
                </div>
              </div>
              <Link
                href="/one-day-mortgage"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 transition-all duration-300 hover:bg-green-700 hover:border-green-700 hover:text-white group-hover:bg-green-700 group-hover:border-green-700 group-hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 p-8 rounded-lg transition-all duration-300 transform hover:shadow-xl hover:scale-105 group">
              <div className="flex flex-col md:flex-row mb-6">
                <div className="mb-6 md:mb-0 md:mr-6 md:w-1/3 overflow-hidden rounded-md">
                  <div className="relative h-40 w-full transform transition-transform duration-700 group-hover:scale-110">
                    <div className="absolute inset-0 bg-gray-300">
                      {" "}
                      <img
                        src="https://media.better.com/better-com/homepage/learning-center/better-heloc.webp"
                        alt="Insurance Icon"
  className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                    Better HELOC
                  </h3>
                  <p className="text-sm text-gray-600">
                    Introducing One Day HELOC™—your express lane to getting cash
                    from your home with our Home Equity Line of Credit.³ Access
                    up to 90% of your home equity as cash in as little as 7
                    days.⁴
                  </p>
                </div>
              </div>
              <Link
                href="/heloc"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 transition-all duration-300 hover:bg-green-700 hover:border-green-700 hover:text-white group-hover:bg-green-700 group-hover:border-green-700 group-hover:text-white"
              >
                <svg
                  xmlns="https://media.better.com/better-com/homepage/learning-center/better-heloc.webp"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-50 p-8 rounded-lg transition-all duration-300 transform hover:shadow-xl hover:scale-105 group">
              <h3 className="text-xl font-bold mb-6 text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                Insurance
              </h3>
              <div className="mb-6 overflow-hidden rounded-md">
                <div className="relative h-48 w-full transform transition-transform duration-700 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gray-300">
                    {" "}
                    <img
                      src="https://media.better.com/better-com/homepage/learning-center/insurance.webp"
                      alt="Insurance Icon"
  className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <Link
                href="/insurance"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 transition-all duration-300 hover:bg-green-700 hover:border-green-700 hover:text-white group-hover:bg-green-700 group-hover:border-green-700 group-hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-green-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to make home happen?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get pre-approved in minutes and find out how much home you can
            afford.
          </p>
          <button className="bg-white text-green-800 font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white">
            Start your application
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
